#ifdef GL_ES
precision mediump float;
#endif

// #include "lygia/generative/random.glsl"
#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 uv, float pct){
    return  smoothstep(pct-0.01, pct, uv.y)
    - smoothstep(pct, pct+0.01, uv.y);
    }
    
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float y = smoothstep(0.0, 0.5, uv.x) - smoothstep(0.5, 1.0, uv.x);
    gl_FragColor = vec4(y, 1.0, 1.0, 1.0);
    // vec3 color = vec3(y);
    // float pct = plot(uv, y);
    // color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);
    }