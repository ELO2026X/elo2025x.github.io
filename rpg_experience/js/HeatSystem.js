/**
 * Simple Heat Haze Post-Process Logic (Pseudo-shader)
 * Since we don't have a full composer setup yet, we will use a DOM-based 
 * SVG displacement filter for a "glitchy" heat look on the canvas.
 */
export class HeatSystem {
    constructor() {
        this.filterId = 'heat-displacement';
        this.createSVGFilter();
        this.active = false;
    }

    createSVGFilter() {
        // Create an SVG filter for turbulence/displacement
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.position = 'absolute';
        svg.style.width = '0';
        svg.style.height = '0';

        svg.innerHTML = `
            <filter id="${this.filterId}">
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.005" numOctaves="2" result="warp" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
            </filter>
        `;
        document.body.appendChild(svg);
    }

    applyHeat(intensity) {
        // Map intensity (0-100) to displacement scale (0-50)
        // Only apply if "Hot" (>60)
        const displacement = Math.max(0, (intensity - 60) * 1.5);

        const filter = document.getElementById(this.filterId);
        if (filter) {
            const dispMap = filter.querySelector('feDisplacementMap');
            if (dispMap) {
                dispMap.setAttribute('scale', displacement);
            }
            const turb = filter.querySelector('feTurbulence');
            if (turb) {
                // Animate frequency slightly for "movement"
                const time = Date.now() * 0.001;
                turb.setAttribute('baseFrequency', `0.01 ${0.005 + Math.sin(time) * 0.002}`);
            }
        }

        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.filter = displacement > 0 ? `url(#${this.filterId})` : 'none';
        }
    }
}
