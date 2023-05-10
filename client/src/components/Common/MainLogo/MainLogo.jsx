import React from 'react';
import * as SC from './MainLogo.styled';

export const MainLogo = () => {
  return (
    <SC.LogoContainer to="/home">
      <svg viewBox="0 0 32 32" width={50} height={50}>
        <path
          fill="#a74d4a"
          style={{ fill: 'var(--color4, #a74d4a)' }}
          d="M4.563 25.877l1.683 1.623v-15.21h-1.683v13.587z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M5.528 13.145l0.007 3.314-0.016-0.016 0.617-0.001-0.018 0.017 0.123-3.323 0.011 0.011-0.723-0.002zM5.519 13.126c0.122-0.011 0.245-0.023 0.366-0.032 0.122-0.010 0.245-0.019 0.366-0.027l0.066-0.003 0.002 0.074c0.009 0.277 0.009 0.554 0.013 0.833v0.415c-0.001 0.139 0.001 0.278-0.002 0.417l-0.006 0.415c-0.003 0.139-0.003 0.277-0.008 0.416l-0.023 0.831-0.005 0.154-0.154-0.002-0.769-0.007v-0.151c0.001-0.138 0.006-0.277 0.007-0.415l0.009-0.414c0.002-0.139 0.008-0.278 0.012-0.416l0.014-0.416c0.014-0.276 0.023-0.554 0.042-0.831 0.007-0.138 0.016-0.277 0.027-0.415 0.009-0.138 0.022-0.277 0.033-0.415l0.001-0.007 0.008-0.002zM5.528 17.11l0.005 0.379-0.013-0.014 0.615-0.003-0.017 0.017c-0.001-0.129 0.001-0.259 0.002-0.387l0.015 0.015-0.307-0.002c-0.1 0-0.199-0.003-0.299-0.005zM5.519 17.093c0.025-0.011 0.051-0.021 0.077-0.029s0.051-0.017 0.077-0.023l0.077-0.020c0.026-0.007 0.051-0.011 0.077-0.017l0.077-0.015 0.077-0.011c0.051-0.007 0.103-0.015 0.154-0.019l0.127-0.011 0.015 0.154c0.006 0.065 0.010 0.129 0.013 0.193 0.002 0.033 0.002 0.065 0.002 0.097 0 0.014 0 0.032 0 0.049s-0 0.034-0 0.051l0-0.003-0.004 0.158-0.153-0.001c-0.056-0.001-0.11-0.002-0.164-0.005l0.009 0c-0.051-0.003-0.102-0.009-0.154-0.013-0.025-0.002-0.051-0.003-0.077-0.007l-0.077-0.011c-0.062-0.008-0.114-0.017-0.166-0.029l0.012 0.002-0.105-0.023 0.011-0.071c0.006-0.033 0.009-0.065 0.017-0.097l0.019-0.097c0.006-0.032 0.015-0.065 0.023-0.097s0.017-0.065 0.027-0.097l0.002-0.006 0.007-0.003zM5.044 25.684v-0.031c0.003-0.083 0.022-0.162 0.055-0.232l-0.002 0.004c0.029-0.062 0.069-0.114 0.116-0.157l0-0c0.061-0.052 0.137-0.090 0.22-0.105l0.003-0c0.022-0.003 0.047-0.006 0.073-0.006 0.071 0 0.139 0.015 0.2 0.043l-0.003-0.001c0.093 0.043 0.167 0.111 0.218 0.195l0.001 0.002c0.026 0.043 0.045 0.091 0.059 0.14 0.006 0.024 0.011 0.048 0.014 0.076 0.004 0.031 0.002 0.043 0.003 0.073-0.007 0.249-0.196 0.452-0.438 0.481l-0.002 0c-0.024 0.003-0.041 0.002-0.061 0.003-0.024 0-0.042-0.003-0.063-0.006-0.14-0.025-0.257-0.111-0.322-0.229l-0.001-0.002c-0.037-0.062-0.062-0.136-0.068-0.215l-0-0.002-0.002-0.030zM5.062 25.683l0.001 0.031c0 0.010 0.002 0.022 0.004 0.036 0.009 0.064 0.034 0.121 0.069 0.168l-0.001-0.001c0.030 0.041 0.074 0.081 0.127 0.11 0.061 0.033 0.134 0.052 0.211 0.052 0.008 0 0.016-0 0.024-0.001l-0.001 0c0.019-0.002 0.040-0.003 0.054-0.007 0.11-0.022 0.201-0.087 0.256-0.178l0.001-0.002c0.034-0.056 0.054-0.124 0.054-0.197 0-0.005-0-0.009-0-0.014l0 0.001c-0.002-0.013-0.003-0.045-0.007-0.055-0.003-0.016-0.009-0.033-0.014-0.050-0.013-0.035-0.030-0.066-0.051-0.093l0.001 0.001c-0.059-0.077-0.145-0.131-0.244-0.148l-0.002-0c-0.015-0.003-0.031-0.003-0.046-0.006h-0.005v-0.001h-0.018c-0.009 0-0.020-0.001-0.026 0-0.025 0.002-0.057 0.003-0.085 0.010-0.084 0.017-0.157 0.060-0.211 0.119l-0 0c-0.047 0.052-0.079 0.118-0.088 0.192l-0 0.002-0.003 0.030z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M20.976 30.146s6.44-8.226 5.257-11.314c-0.902-2.527-1.68-3.12-1.68-3.12s-1.992-1.31-2.926-1.341c-0.249-0.343-1.993-1.248-1.993-1.248h-0.932l-2.989 0.718s-0.778 0.405-1.058 1.871c-2.148 0.593-3.512 3.953-3.512 3.953s-2.546 2.63-2.702 4.377c-0.716 0.593 0.591 2.33 0.591 2.33l2.768 0.235v3.719s2.246 0.716 4.906 0.541c2.165 0 4.269-0.722 4.269-0.722z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M14.966 13.122s-0.86-0.733-1.72-1.003c-0.86-0.269-1.679-3.727-1.679-3.727s0.697-3.491 2.746-3.546c2.050-0.054 3.877 0.372 3.877 0.372s1.251 0.366 1.413 2.287c0.162 1.92-1.251 2.729-1.251 2.729l-3.386 2.888z"
        ></path>
        <path
          fill="#fff"
          style={{ fill: 'var(--color3, #fff)' }}
          d="M13.343 24.883l-4.193-1.159s-1.639 1.767-1.384 4.003c3.226 1.838 7.838-0.577 7.838-0.577l-2.261-2.266zM15.553 25.341l2.824-0.391 2.431 0.649s0.694 0.070 1.046 0.51c0.138 0.168 0.358 0.448 0.576 0.73l0.096 0.13s0.273 0.337 0.098 0.67c-0.175 0.333-0.698 1.133-0.698 1.133s-0.295 0.278-0.592-0.025c-0.566 0.318-0.743-0.18-0.743-0.18s-0.598 0.202-0.781-0.329c-0.154 0.229-0.658 0.112-0.658 0.112l-0.674-0.006s-0.282-0.305 0.078-0.531c0.36-0.227 0.528-0.169 0.528-0.169l-0.049-0.316-0.609-0.49s-0.503 0.243-1.739-0.070c-0.323-0.081-0.759-0.158-0.759-0.158s-0.559-0.757-0.377-1.267z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M13.38 25.137l2.242 2.314-0.017 0.006c-0.318 0.121-0.642 0.227-0.968 0.326s-0.655 0.19-0.985 0.271c-0.558 0.148-1.241 0.276-1.938 0.357l-0.072 0.007c-0.677 0.072-1.363 0.093-2.041 0.008-0.373-0.045-0.711-0.123-1.034-0.233l0.036 0.011c-0.348-0.118-0.65-0.275-0.923-0.471l0.011 0.007-0.006-0.005-0.001-0.008c-0.008-0.083-0.013-0.18-0.013-0.278 0-0.071 0.003-0.141 0.007-0.211l-0.001 0.009c0.012-0.16-0.007-0.217 0.026-0.473 0.052-0.533 0.14-1.22 0.355-1.457s0.478-0.429 0.76-0.578c0.141-0.075 0.288-0.139 0.437-0.194 0.15-0.055 0.302-0.103 0.46-0.134h0.002l3.662 0.727zM13.373 25.154l-0.433 0.006c-0.145 0.003-0.29 0.002-0.437 0.003l-1.308 0.003c-0.145 0.001-0.29-0.002-0.436-0.003l-1.043-0.634 0.022-0.002c-0.171 0.042-0.317 0.089-0.457 0.147l0.021-0.008c-0.304 0.121-0.567 0.273-0.805 0.455l0.008-0.006c-0.121 0.091-0.231 0.194-0.331 0.306-0.199 0.223-0.233 0.898-0.313 1.399-0.019 0.234-0.007 0.29-0.017 0.439-0.003 0.049-0.005 0.105-0.005 0.162 0 0.102 0.005 0.202 0.016 0.301l-0.001-0.012-0.063-0.11c0.263 0.187 0.559 0.33 0.869 0.435 0.31 0.106 0.634 0.177 0.963 0.221 0.659 0.086 1.334 0.071 2.003 0.004 0.407-0.043 0.748-0.093 1.086-0.155l-0.086 0.013c0.167-0.029 0.333-0.061 0.498-0.095 0.959-0.193 1.779-0.423 2.573-0.706l-0.129 0.040-0.034 0.155-0.274-0.291c-0.090-0.098-0.183-0.194-0.272-0.293l-1.081-1.182c-0.18-0.195-0.355-0.394-0.534-0.592zM21.305 28.73s0.050-0.075 0.125-0.186c0.037-0.055 0.081-0.12 0.129-0.189s0.1-0.141 0.152-0.214c0.053-0.071 0.098-0.15 0.15-0.214 0.098-0.117 0.214-0.215 0.345-0.292l0.006-0.003 0.014 0.011s-0.006 0.023-0.021 0.062c-0.055 0.13-0.122 0.241-0.204 0.341l0.002-0.002c-0.054 0.063-0.122 0.123-0.183 0.188s-0.122 0.13-0.181 0.19c-0.055 0.056-0.107 0.109-0.16 0.162l-0.001 0.001c-0.094 0.095-0.159 0.157-0.159 0.157l-0.014-0.011zM20.497 28.57s0.049-0.075 0.125-0.186c0.038-0.055 0.081-0.12 0.13-0.189 0.047-0.069 0.1-0.142 0.151-0.214 0.053-0.072 0.098-0.15 0.151-0.215 0.085-0.101 0.181-0.187 0.289-0.259l0.005-0.003c0.034-0.023 0.057-0.033 0.057-0.033l0.013 0.011s-0.006 0.023-0.022 0.061c-0.054 0.13-0.122 0.241-0.204 0.341l0.002-0.002c-0.054 0.063-0.122 0.122-0.183 0.189-0.061 0.064-0.121 0.13-0.181 0.189-0.055 0.056-0.107 0.11-0.16 0.162l-0.001 0.001c-0.094 0.095-0.159 0.157-0.159 0.157l-0.014-0.011z"
        ></path>
        <path
          fill="#fff"
          style={{ fill: 'var(--color3, #fff)' }}
          d="M18.089 6.144s1.618 1.207 1.577 1.623c-0.042 0.416 0.59 5.452-0.489 5.909 0.166 0.583 0.662 0.571 0.662 0.571s0.343 1.563-1.234 3.185c-0.125 0.832-0.285 1.436-0.285 1.436l-0.895 0.317-2.779-6.89s-0.749-0.286-0.955-1.077c0.456-0.873 1.369-3.869 1.369-3.869s1.785-0.831 1.909-1.206h1.121zM3.795 23.693c-0.318-0.265-0.158-0.799-0.158-0.799s-0.346-0.419-0.126-0.776c-0.278-0.178-0.2-0.689-0.2-0.689s1.705-0.823 1.906-0.915c0.2-0.091 1.826 0.929 1.826 0.929l2.133 1.754 7.751 2.017s2.074-2.454 3.343-3.443c2.067 0.533 2.391 3.305 2.391 3.305s-2.453 2.72-4.266 4.063c-0.842 0.474-2.248-0.122-2.248-0.122s-5.169-1.805-7.791-3.573c0 0-1.99-0.044-3.094-1.054 0 0-0.262-0.019-0.355 0.107-0.093 0.124-0.454 0.629-0.454 0.629s-0.646-0.266-0.825-0.571c-0.18-0.306 0.167-0.861 0.167-0.861z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M17.91 6.153h-1.117l0.009-0.006c-0.020 0.047-0.047 0.088-0.080 0.122l0-0c-0.033 0.035-0.067 0.067-0.102 0.097l-0.002 0.001c-0.067 0.056-0.142 0.112-0.219 0.165l-0.010 0.006c-0.158 0.107-0.321 0.205-0.487 0.298-0.331 0.187-0.67 0.36-1.013 0.523l0.006-0.007c-0.347 1.176-0.562 1.826-0.785 2.473l0.156-0.518c-0.055 0.162-0.111 0.324-0.168 0.485-0.056 0.162-0.115 0.322-0.174 0.483s-0.121 0.321-0.186 0.48c-0.031 0.079-0.066 0.157-0.1 0.235-0.034 0.079-0.074 0.155-0.11 0.233l0.001-0.009c0.010 0.031 0.017 0.065 0.031 0.096 0.024 0.071 0.052 0.132 0.085 0.189l-0.003-0.005c0.017 0.029 0.033 0.059 0.053 0.087 0.074 0.113 0.166 0.213 0.267 0.303 0.102 0.089 0.213 0.166 0.331 0.233 0.117 0.067 0.24 0.126 0.368 0.169l0.006 0.002 0.003 0.007 2.597 6.882-0.021-0.010 0.996-0.312-0.011 0.011c0.030-0.119 0.059-0.239 0.086-0.36l0.040-0.182c0.013-0.060 0.025-0.12 0.037-0.182l0.035-0.182 0.033-0.183c0.023-0.121 0.040-0.243 0.060-0.366l0.001-0.005 0.003-0.003 0.149-0.16c0.048-0.055 0.097-0.109 0.142-0.166s0.093-0.112 0.136-0.171c0.043-0.058 0.087-0.117 0.128-0.177 0.042-0.059 0.080-0.121 0.12-0.183 0.038-0.062 0.074-0.126 0.11-0.189 0.034-0.065 0.070-0.128 0.101-0.194 0.033-0.066 0.061-0.132 0.090-0.199 0.027-0.067 0.055-0.135 0.079-0.205 0.091-0.249 0.157-0.537 0.186-0.837l0.001-0.014c0.005-0.063 0.009-0.139 0.010-0.216l0-0.002c0-0.014 0-0.031 0-0.047 0-0.136-0.012-0.27-0.036-0.399l0.002 0.014 0.013 0.011c-0.256-0.021-0.474-0.165-0.596-0.373l-0.002-0.004c-0.038-0.065-0.070-0.139-0.093-0.218l-0.002-0.007-0.003-0.011 0.009-0.005c0.151-0.083 0.265-0.222 0.35-0.371 0.084-0.152 0.143-0.318 0.189-0.486 0.087-0.339 0.125-0.688 0.143-1.038s0.014-0.7 0-1.050c-0.019-0.412-0.045-0.774-0.080-1.135l0.007 0.087c-0.050-0.532-0.090-0.89-0.135-1.248l0.021 0.203-0.061-0.523c-0.009-0.069-0.017-0.16-0.022-0.251l-0.001-0.012c-0-0.007-0.001-0.016-0.001-0.024 0-0.015 0.001-0.030 0.002-0.044l-0 0.002c0-0.004 0-0.009 0-0.014 0-0.017-0.002-0.034-0.007-0.050l0 0.001c-0.012-0.045-0.029-0.084-0.050-0.121l0.001 0.002c-0.086-0.151-0.206-0.281-0.326-0.407s-0.249-0.245-0.379-0.361c-0.241-0.213-0.505-0.429-0.777-0.636l-0.034-0.025zM17.919 6.137c0.283 0.205 0.561 0.419 0.829 0.646 0.133 0.114 0.264 0.232 0.389 0.357 0.124 0.126 0.247 0.254 0.342 0.414 0.023 0.040 0.043 0.083 0.057 0.133 0.006 0.026 0.010 0.052 0.007 0.082 0.001 0.007-0.001 0.023 0 0.030l0.001 0.029c0.005 0.084 0.016 0.171 0.027 0.257l0.070 0.521c0.047 0.348 0.093 0.696 0.13 1.046s0.066 0.7 0.086 1.051c0.017 0.353 0.025 0.706 0.010 1.061s-0.049 0.711-0.137 1.063c-0.048 0.197-0.115 0.371-0.201 0.532l0.006-0.012c-0.091 0.164-0.219 0.325-0.399 0.429l0.059-0.146c0.011 0.034 0.023 0.068 0.037 0.099 0.041 0.096 0.101 0.178 0.174 0.244l0.001 0.001c0.072 0.062 0.161 0.108 0.257 0.132l0.004 0.001 0.048 0.009c0.012 0.002 0.026 0.003 0.041 0.004l0.001 0 0.109 0.004 0.021 0.101c0.018 0.088 0.026 0.16 0.033 0.239 0.005 0.062 0.008 0.135 0.008 0.208 0 0.088-0.004 0.176-0.012 0.262l0.001-0.011c-0.006 0.076-0.015 0.152-0.026 0.227-0.029 0.178-0.063 0.329-0.104 0.476l0.007-0.030c-0.022 0.073-0.043 0.146-0.069 0.217-0.023 0.072-0.053 0.142-0.080 0.213-0.030 0.069-0.059 0.139-0.094 0.207-0.032 0.069-0.068 0.135-0.103 0.203-0.037 0.065-0.074 0.131-0.114 0.195-0.039 0.065-0.079 0.129-0.123 0.19-0.050 0.075-0.093 0.135-0.138 0.194l0.007-0.009c-0.044 0.061-0.093 0.118-0.14 0.177-0.046 0.058-0.097 0.114-0.146 0.171l-0.153 0.166 0.040-0.082c-0.020 0.124-0.037 0.247-0.059 0.371l-0.033 0.185-0.034 0.184-0.037 0.184-0.040 0.183-0.041 0.183c-0.014 0.062-0.029 0.122-0.045 0.185l-0.021 0.081-0.081 0.025-1.135 0.36-0.053-0.139c-0.109-0.286-0.219-0.572-0.326-0.86l-0.321-0.862-1.927-5.169 0.086 0.081c-0.082-0.027-0.149-0.056-0.215-0.088l0.010 0.004c-0.208-0.097-0.386-0.216-0.545-0.356l0.002 0.002c-0.109-0.097-0.204-0.207-0.284-0.328l-0.004-0.006c-0.059-0.087-0.11-0.187-0.146-0.293l-0.002-0.009c-0.013-0.034-0.022-0.071-0.033-0.107l-0.013-0.041 0.023-0.045c0.035-0.074 0.074-0.147 0.109-0.225 0.033-0.077 0.070-0.153 0.101-0.231 0.066-0.157 0.129-0.315 0.19-0.474 0.060-0.159 0.121-0.319 0.178-0.479 0.059-0.16 0.115-0.321 0.173-0.482 0.113-0.322 0.223-0.646 0.331-0.97l0.322-0.974 0.010-0.032 0.029-0.013c0.343-0.156 0.685-0.322 1.018-0.503 0.166-0.090 0.33-0.184 0.487-0.287 0.078-0.051 0.156-0.106 0.227-0.164 0.036-0.030 0.071-0.061 0.102-0.093 0.030-0.029 0.054-0.064 0.072-0.102l0.001-0.002 0.009-0.023h0.023l1.123 0.025 0.003 0.002z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M14.095 11.047c0.078 0.187-0.218-0.39-0.218-0.39s-0.186-0.499 0-1.030c0.187-0.53 0.747-1.747 0.778-2.465 1.183-0.187 2.21-1.17 2.21-1.17s0.827-0.016 0.927 0c0.101 0.015 0.68 0.145 1.666 1.632-0.651-0.867-1.465-0.93-1.465-0.93s-0.101 0.609-1.082 0.718c0.716-0.577 0.589-0.874 0.589-0.874s-0.416 0.969-1.638 1.279c0.707-0.562 0.614-1.030 0.614-1.030s-0.653 0.811-1.525 1.123c0.187 0.577 0.114 1.197 0.114 1.197s-0.619 1.012-0.386 1.73c0 0-0.043 0.43-0.043 0.613s-0.541-0.404-0.541-0.404z"
        ></path>
        <path
          fill="#a74d4a"
          style={{ fill: 'var(--color4, #a74d4a)' }}
          d="M19.514 5.994c-0.514-2.27-2.579-3.825-4.867-3.423s-3.815 2.586-3.414 4.878l0.154 0.882-0.363 0.691s0.83 0.922 3.785 0.632l1.631 0.312s0.782 0.352 3.293-0.8c1.745-0.767 1.511-1.145 1.511-1.145l-1.324-0.771c-0.001 0-0.311-0.843-0.405-1.257z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M3.962 23.706s0.071-0.030 0.18-0.071c0.054-0.021 0.117-0.046 0.185-0.071 0.067-0.025 0.14-0.050 0.213-0.077 0.073-0.025 0.143-0.059 0.213-0.079 0.076-0.020 0.164-0.032 0.254-0.032 0.030 0 0.061 0.001 0.090 0.004l-0.004-0c0.035 0.003 0.057 0.008 0.057 0.008l0.005 0.017s-0.016 0.014-0.045 0.035c-0.088 0.062-0.191 0.112-0.302 0.143l-0.007 0.002c-0.070 0.018-0.149 0.024-0.223 0.038-0.076 0.014-0.151 0.029-0.223 0.041-0.071 0.013-0.139 0.023-0.196 0.032-0.114 0.018-0.191 0.029-0.191 0.029l-0.005-0.017zM3.745 22.903s0.076-0.034 0.192-0.081c0.058-0.024 0.126-0.053 0.199-0.081 0.073-0.029 0.151-0.059 0.229-0.089 0.078-0.029 0.154-0.066 0.228-0.090 0.096-0.029 0.206-0.046 0.32-0.046 0.038 0 0.075 0.002 0.111 0.005l-0.005-0 0.005 0.017s-0.017 0.015-0.049 0.038c-0.095 0.067-0.205 0.122-0.323 0.159l-0.008 0.002c-0.075 0.022-0.158 0.031-0.24 0.050s-0.162 0.037-0.239 0.051c-0.077 0.017-0.149 0.030-0.21 0.042-0.123 0.025-0.206 0.038-0.206 0.038l-0.005-0.017zM3.649 22.12s0.081-0.038 0.203-0.093c0.061-0.027 0.133-0.060 0.21-0.093 0.077-0.034 0.159-0.067 0.241-0.101 0.083-0.033 0.162-0.077 0.241-0.105 0.115-0.039 0.248-0.063 0.386-0.067l0.002-0c0.005-0 0.011-0 0.017-0 0.017 0 0.034 0.001 0.050 0.003l-0.002-0 0.006 0.016s-0.018 0.017-0.051 0.041c-0.1 0.073-0.216 0.135-0.339 0.179l-0.010 0.003c-0.080 0.025-0.169 0.040-0.254 0.063s-0.171 0.047-0.254 0.067c0.012 0-0.062 0.019-0.137 0.036l-0.085 0.017c-0.13 0.031-0.217 0.050-0.217 0.050l-0.006-0.016zM19.166 13.646s-2.227 0.771-3.175-0.134c1.571 1.233 3.358 0.488 3.358 0.488s-0.101-0.083-0.183-0.354zM14.865 9.646l0.045-0.015c0.029-0.010 0.071-0.026 0.125-0.043s0.12-0.039 0.195-0.062c0.075-0.023 0.161-0.050 0.254-0.075 0.094-0.026 0.194-0.057 0.301-0.084 0.107-0.029 0.218-0.061 0.335-0.089 0.117-0.030 0.237-0.063 0.359-0.093 0.122-0.030 0.247-0.059 0.37-0.093 0.125-0.029 0.249-0.059 0.371-0.091 0.060-0.016 0.121-0.030 0.182-0.043l0.176-0.046c0.116-0.029 0.229-0.058 0.334-0.085s0.206-0.056 0.298-0.081c0.093-0.025 0.177-0.051 0.251-0.074s0.141-0.040 0.192-0.061c0.053-0.019 0.096-0.033 0.125-0.042l0.045-0.015 0.009 0.015-0.157 0.085c-0.049 0.029-0.111 0.057-0.184 0.089-0.071 0.032-0.152 0.069-0.243 0.103s-0.189 0.074-0.294 0.107c-0.105 0.035-0.216 0.074-0.331 0.107l-0.177 0.054-0.182 0.050c-0.122 0.035-0.247 0.067-0.372 0.099s-0.251 0.059-0.375 0.087c-0.124 0.029-0.246 0.054-0.365 0.079-0.237 0.049-0.459 0.092-0.649 0.126-0.381 0.070-0.636 0.109-0.636 0.109l-0.003-0.017zM11.451 8.325s0.023 0.015 0.067 0.038c0.045 0.021 0.111 0.051 0.199 0.083l0.069 0.025c0.024 0.008 0.051 0.014 0.078 0.023 0.054 0.014 0.11 0.037 0.173 0.048l0.201 0.046 0.224 0.036c0.077 0.015 0.16 0.020 0.246 0.027 0.085 0.006 0.171 0.023 0.262 0.023l0.279 0.010c0.094 0.005 0.193-0.001 0.291-0.001l0.149-0.002c0.050 0 0.101 0 0.151-0.006 0.102-0.008 0.205-0.015 0.309-0.020l0.157-0.010c0.052-0.005 0.105-0.011 0.157-0.017l0.316-0.038c0.052-0.006 0.106-0.010 0.158-0.017l0.157-0.024 0.311-0.050c0.207-0.029 0.41-0.073 0.606-0.11 0.097-0.019 0.194-0.039 0.289-0.055s0.186-0.041 0.276-0.060c0.179-0.042 0.349-0.078 0.507-0.111l0.115-0.025 0.109-0.028 0.203-0.049c0.127-0.032 0.239-0.057 0.331-0.078 0.091-0.021 0.165-0.035 0.214-0.046 0.050-0.011 0.077-0.016 0.077-0.016l0.006 0.017s-0.102 0.033-0.282 0.091l-0.629 0.203-0.114 0.032-0.503 0.138c-0.089 0.023-0.18 0.053-0.275 0.073l-0.29 0.065c-0.198 0.042-0.4 0.095-0.61 0.126l-0.315 0.054-0.159 0.026c-0.053 0.008-0.107 0.012-0.161 0.019l-0.32 0.034c-0.054 0.006-0.107 0.013-0.161 0.017-0.053 0.002-0.106 0.005-0.159 0.007l-0.314 0.015c-0.027 0.002-0.058 0.002-0.090 0.002-0.023 0-0.046-0-0.069-0.001l0.003 0-0.152-0.002c-0.051 0-0.101-0.002-0.151-0.002-0.049 0-0.098-0.001-0.147-0.007-0.252-0.018-0.374-0.028-0.496-0.039l0.142 0.010-0.067-0.009c-0.045-0.007-0.089-0.014-0.131-0.020-0.086-0.014-0.17-0.023-0.248-0.044-0.079-0.017-0.155-0.035-0.226-0.051-0.331-0.091-0.398-0.112-0.465-0.133l0.265 0.072c-0.064-0.017-0.12-0.044-0.173-0.063-0.027-0.011-0.052-0.019-0.076-0.030s-0.046-0.023-0.067-0.032c-0.086-0.039-0.149-0.078-0.194-0.105-0.042-0.029-0.063-0.046-0.063-0.046l0.011-0.014z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M13.521 2.958c0.149-0.065 0.306-0.11 0.468-0.136s0.326-0.040 0.49-0.035c0.165 0.006 0.331 0.020 0.492 0.062 0.041 0.009 0.082 0.019 0.121 0.031l0.12 0.035c0.078 0.029 0.157 0.056 0.233 0.090 0.152 0.069 0.301 0.146 0.44 0.238 0.070 0.046 0.141 0.090 0.206 0.144 0.065 0.051 0.133 0.101 0.193 0.16 0.059 0.057 0.124 0.111 0.18 0.173l0.17 0.183c0.104 0.129 0.213 0.255 0.303 0.394 0.098 0.134 0.178 0.278 0.265 0.419 0.042 0.071 0.078 0.145 0.117 0.217 0.038 0.074 0.079 0.145 0.112 0.22 0.065 0.15 0.138 0.298 0.194 0.451l0.089 0.229c0.031 0.076 0.054 0.154 0.081 0.232 0.026 0.077 0.053 0.154 0.077 0.232 0.026 0.078 0.045 0.157 0.067 0.235 0.043 0.157 0.089 0.313 0.123 0.472 0.019 0.079 0.038 0.158 0.054 0.238s0.034 0.158 0.047 0.239l0.085 0.479-0.075-0.083 0.215 0.074 0.107 0.038c0.036 0.013 0.071 0.024 0.107 0.039l0.213 0.085c0.017 0.006 0.034 0.016 0.053 0.025l0.051 0.026c0.034 0.017 0.069 0.034 0.106 0.055l-0.065-0.003 0.486-0.183c0.082-0.030 0.162-0.063 0.244-0.091l0.246-0.087 0.007 0.016-0.953 0.425-0.006-0.003c-0.025-0.013-0.058-0.028-0.092-0.043l-0.009-0.003-0.051-0.023c-0.017-0.006-0.034-0.015-0.053-0.021l-0.21-0.077c-0.034-0.014-0.071-0.024-0.107-0.035l-0.321-0.099-0.008-0.002-0.002-0.007-0.101-0.472c-0.023-0.11-0.042-0.188-0.063-0.266l0.007 0.032-0.059-0.234c-0.037-0.156-0.086-0.309-0.131-0.463-0.024-0.077-0.044-0.154-0.070-0.23l-0.078-0.229c-0.028-0.075-0.051-0.153-0.082-0.226l-0.089-0.225c-0.055-0.15-0.128-0.294-0.193-0.44-0.031-0.074-0.071-0.144-0.108-0.215s-0.073-0.143-0.113-0.213c-0.082-0.137-0.16-0.278-0.253-0.408-0.087-0.135-0.189-0.259-0.287-0.386l-0.161-0.179c-0.053-0.060-0.113-0.113-0.17-0.169-0.055-0.058-0.12-0.106-0.181-0.158-0.059-0.054-0.126-0.097-0.191-0.144-0.119-0.085-0.255-0.165-0.397-0.235l-0.017-0.008c-0.071-0.035-0.147-0.063-0.22-0.094l-0.114-0.038c-0.031-0.012-0.069-0.024-0.109-0.033l-0.006-0.001-0.116-0.030-0.118-0.022c-0.031-0.007-0.072-0.013-0.113-0.017l-0.006-0.001c-0.040-0.004-0.079-0.011-0.119-0.013-0.060-0.005-0.13-0.008-0.2-0.008-0.098 0-0.195 0.006-0.291 0.016l0.012-0.001c-0.173 0.018-0.331 0.054-0.481 0.106l0.015-0.004-0.006-0.017z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M14.168 2.694l0.041-0.028c0.027-0.017 0.069-0.043 0.123-0.069 0.056-0.028 0.123-0.055 0.193-0.077l0.011-0.003c0.082-0.026 0.175-0.051 0.28-0.065 0.105-0.015 0.221-0.026 0.343-0.020 0.122 0.005 0.253 0.017 0.383 0.051 0.131 0.030 0.265 0.073 0.393 0.133 0.063 0.030 0.128 0.061 0.189 0.097 0.064 0.034 0.123 0.073 0.183 0.113 0.116 0.082 0.226 0.173 0.327 0.267s0.191 0.198 0.274 0.299c0.043 0.049 0.080 0.101 0.117 0.153s0.073 0.101 0.103 0.151c0.032 0.051 0.065 0.099 0.093 0.147l0.077 0.143c0.051 0.089 0.088 0.177 0.122 0.253 0.036 0.076 0.061 0.144 0.082 0.201 0.021 0.055 0.035 0.101 0.046 0.131l0.015 0.046-0.015 0.008-0.088-0.163c-0.041-0.078-0.076-0.138-0.113-0.197l0.007 0.013c-0.042-0.070-0.087-0.151-0.145-0.234-0.027-0.042-0.057-0.086-0.086-0.131l-0.1-0.135c-0.038-0.053-0.074-0.099-0.112-0.143l0.002 0.003c-0.039-0.046-0.077-0.096-0.12-0.142s-0.085-0.095-0.131-0.14c-0.046-0.045-0.091-0.092-0.141-0.135-0.142-0.129-0.3-0.247-0.469-0.348l-0.014-0.008c-0.057-0.035-0.117-0.065-0.175-0.094-0.273-0.135-0.594-0.214-0.933-0.214-0.038 0-0.075 0.001-0.112 0.003l0.005-0c-0.174 0.010-0.336 0.041-0.491 0.090l0.014-0.004c-0.112 0.035-0.171 0.066-0.171 0.066l-0.008-0.016z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M19.909 7.263l-0.025-0.078c-0.016-0.050-0.043-0.123-0.076-0.216-0.067-0.19-0.109-0.299-0.153-0.408l0.027 0.077c-0.087-0.217-0.148-0.356-0.211-0.493l0.030 0.072c-0.050-0.113-0.088-0.19-0.127-0.267l0.014 0.031c-0.039-0.081-0.081-0.163-0.125-0.249-0.090-0.169-0.189-0.343-0.297-0.52-0.106-0.179-0.233-0.351-0.358-0.528-0.131-0.171-0.269-0.345-0.42-0.503-0.147-0.162-0.299-0.311-0.461-0.449l-0.007-0.006c-0.040-0.037-0.084-0.067-0.125-0.101l-0.124-0.101c-0.086-0.061-0.169-0.123-0.255-0.18-0.087-0.054-0.171-0.109-0.257-0.159-0.087-0.047-0.17-0.097-0.254-0.139-0.086-0.040-0.169-0.078-0.249-0.118-0.082-0.034-0.163-0.066-0.239-0.098-0.075-0.034-0.153-0.053-0.225-0.079-0.073-0.023-0.139-0.051-0.206-0.066l-0.184-0.050c-0.057-0.015-0.109-0.032-0.157-0.040-0.096-0.020-0.171-0.038-0.223-0.050l-0.080-0.017 0.002-0.018 0.309 0.037c0.049 0.005 0.103 0.016 0.161 0.027s0.122 0.023 0.189 0.037c0.069 0.011 0.138 0.034 0.213 0.053 0.074 0.021 0.154 0.037 0.234 0.067l0.249 0.086 0.262 0.11c0.088 0.040 0.176 0.087 0.267 0.133 0.091 0.047 0.178 0.103 0.27 0.156 0.090 0.057 0.178 0.119 0.269 0.18 0.087 0.067 0.175 0.132 0.261 0.203 0.169 0.144 0.337 0.297 0.489 0.465 0.155 0.165 0.294 0.344 0.427 0.522 0.127 0.183 0.25 0.365 0.355 0.55 0.174 0.293 0.341 0.637 0.482 0.995l0.017 0.050c0.081 0.199 0.168 0.458 0.242 0.723l0.013 0.056c0.050 0.192 0.071 0.303 0.071 0.303l-0.017 0.003z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M18.491 29.206c-0.198 0.117-0.429 0.173-0.656 0.193-0.066 0.005-0.143 0.009-0.221 0.009-0.165 0-0.326-0.014-0.484-0.041l0.017 0.002c-0.316-0.050-0.597-0.123-0.866-0.222l0.032 0.010-0.082-0.031c-0.023-0.009-0.053-0.018-0.078-0.029l-0.323-0.113c-0.43-0.154-0.857-0.313-1.283-0.476-0.774-0.288-1.194-0.459-1.611-0.635l0.34 0.128c-1.155-0.47-1.979-0.843-2.79-1.239l0.287 0.126c-0.411-0.199-0.82-0.406-1.223-0.624-0.202-0.109-0.401-0.223-0.598-0.341-0.099-0.058-0.196-0.121-0.294-0.181-0.097-0.061-0.193-0.125-0.29-0.189l0.070 0.024c-0.172-0.010-0.323-0.025-0.473-0.045l0.033 0.004c-0.145-0.018-0.29-0.040-0.434-0.066-0.339-0.060-0.627-0.131-0.907-0.218l0.052 0.014c-0.070-0.022-0.14-0.043-0.21-0.069-0.108-0.036-0.176-0.062-0.244-0.090l0.037 0.013c-0.069-0.027-0.138-0.054-0.206-0.085-0.068-0.029-0.135-0.063-0.202-0.094-0.066-0.035-0.133-0.069-0.197-0.107-0.065-0.036-0.128-0.077-0.191-0.118-0.062-0.043-0.125-0.085-0.184-0.131-0.061-0.046-0.118-0.097-0.175-0.146l0.13 0.036c-0.048 0.012-0.088 0.024-0.126 0.038l0.008-0.003c-0.040 0.014-0.075 0.030-0.107 0.050l0.003-0.001c-0.017 0.011-0.032 0.023-0.046 0.037l-0 0-0.003 0.003 0.003-0.005v0.001l-0.003 0.003-0.010 0.015c-0.013 0.021-0.017 0.028-0.030 0.050l-0.032 0.060c-0.084 0.166-0.163 0.343-0.238 0.518l-0.065 0.149-0.145-0.074c-0.084-0.043-0.152-0.082-0.218-0.125l0.010 0.006c-0.111-0.068-0.207-0.137-0.297-0.212l0.004 0.003c-0.031-0.026-0.062-0.053-0.091-0.082-0.031-0.029-0.060-0.061-0.089-0.093l-0.042-0.052c-0.014-0.018-0.026-0.038-0.039-0.057l-0.010-0.015-0.001-0.002-0.004-0.007-0.002-0.003-0.003-0.006-0.007-0.013-0.007-0.015-0.017-0.040-0.013-0.035c-0.013-0.040-0.023-0.087-0.030-0.135l-0-0.004c-0.011-0.091-0.009-0.178 0.001-0.263 0.015-0.134 0.042-0.256 0.082-0.373l-0.004 0.012c0.013-0.040 0.025-0.075 0.042-0.119l0.046 0.182c-0.071-0.060-0.128-0.134-0.17-0.217l-0.002-0.004c-0.036-0.074-0.062-0.159-0.074-0.249l-0-0.004c-0.005-0.042-0.008-0.091-0.008-0.14 0-0.038 0.002-0.075 0.005-0.112l-0 0.005c0.006-0.068 0.016-0.13 0.029-0.19l-0.002 0.010c0.005-0.021 0.009-0.038 0.017-0.063l0.029 0.144c-0.023-0.029-0.046-0.062-0.068-0.097l-0.003-0.005c-0.021-0.034-0.040-0.069-0.058-0.105-0.034-0.066-0.062-0.143-0.081-0.224l-0.001-0.007c-0.013-0.052-0.020-0.111-0.020-0.171 0-0.032 0.002-0.063 0.006-0.094l-0 0.004c0.013-0.096 0.045-0.183 0.093-0.259l-0.002 0.003 0.047 0.21c-0.073-0.049-0.133-0.113-0.175-0.189l-0.001-0.003c-0.035-0.064-0.063-0.137-0.079-0.215l-0.001-0.005c-0.016-0.072-0.025-0.154-0.025-0.238 0-0.029 0.001-0.057 0.003-0.086l-0 0.004 0.004-0.053c0.002-0.018 0.003-0.034 0.006-0.057l0.011-0.078 2.004-0.951 0.006-0.002 0.014-0.003c0.008-0.002 0.018-0.004 0.029-0.005l0.001-0c0.011 0 0.023-0.001 0.033 0 0.034 0.002 0.066 0.007 0.097 0.016l-0.003-0.001c0.053 0.013 0.097 0.029 0.141 0.046 0.087 0.035 0.168 0.073 0.249 0.113 0.161 0.078 0.315 0.163 0.469 0.249 0.306 0.173 0.606 0.353 0.903 0.539l0.007 0.005 0.007 0.006 0.531 0.44 0.53 0.443 1.057 0.887-0.045-0.023 1.934 0.522c0.643 0.175 1.289 0.346 1.931 0.526l2.896 0.802 0.963 0.272-0.004 0.017-7.758-2.016-2.131-1.752c-0.295-0.183-0.594-0.362-0.898-0.531-0.101-0.060-0.252-0.141-0.406-0.218l-0.055-0.025c-0.058-0.030-0.136-0.066-0.216-0.098l-0.021-0.008c-0.032-0.013-0.073-0.027-0.114-0.039l-0.008-0.002c-0.018-0.005-0.039-0.008-0.060-0.010l-0.001-0h-0.014c-0.004 0.001-0.007 0-0.013 0.003-0.007 0.001-0.019 0.008-0.029 0.011l-1.882 0.906 0.009-0.012c-0.015 0.122-0.014 0.249 0.011 0.369 0.013 0.061 0.033 0.12 0.062 0.173s0.070 0.097 0.119 0.13l0.001 0.001 0.014 0.009-0.009 0.014c-0.033 0.054-0.057 0.118-0.066 0.186l-0 0.002c-0.003 0.021-0.004 0.045-0.004 0.069 0 0.047 0.006 0.093 0.016 0.137l-0.001-0.004c0.015 0.066 0.040 0.131 0.070 0.193 0.031 0.061 0.067 0.12 0.109 0.173l0.006 0.007-0.002 0.009c-0.025 0.088-0.039 0.19-0.039 0.295 0 0.044 0.002 0.086 0.007 0.129l-0-0.005c0.010 0.069 0.028 0.137 0.058 0.199 0.031 0.064 0.074 0.118 0.125 0.162l0.001 0.001 0.010 0.008-0.005 0.011c-0.051 0.126-0.089 0.272-0.109 0.424l-0.001 0.009c-0.005 0.035-0.007 0.076-0.007 0.118 0 0.036 0.002 0.072 0.006 0.108l-0-0.004c0.008 0.059 0.023 0.112 0.044 0.162l-0.002-0.004c0.008 0.017 0.016 0.034 0.026 0.048s0.020 0.031 0.031 0.046l0.034 0.043c0.025 0.028 0.049 0.055 0.077 0.081 0.026 0.027 0.054 0.051 0.083 0.075s0.057 0.047 0.088 0.070c0.119 0.089 0.247 0.168 0.379 0.238l-0.023 0.008c0.077-0.177 0.157-0.354 0.246-0.527 0.022-0.043 0.046-0.087 0.073-0.128 0.014-0.022 0.030-0.041 0.048-0.058l0-0c0.018-0.016 0.038-0.030 0.059-0.043l0.002-0.001c0.038-0.023 0.082-0.044 0.129-0.061l0.006-0.002c0.046-0.017 0.093-0.030 0.141-0.041l0.008-0.002 0.006 0.006c0.054 0.046 0.107 0.094 0.165 0.137 0.056 0.046 0.115 0.085 0.174 0.126 0.061 0.038 0.12 0.078 0.183 0.113 0.062 0.037 0.126 0.070 0.189 0.103 0.065 0.031 0.129 0.064 0.194 0.093 0.066 0.030 0.132 0.056 0.198 0.083 0.067 0.025 0.134 0.051 0.202 0.074 0.067 0.024 0.135 0.046 0.204 0.067 0.274 0.085 0.554 0.151 0.836 0.203 0.282 0.051 0.567 0.089 0.853 0.107h0.005l0.003 0.002c0.096 0.062 0.19 0.126 0.286 0.187 0.097 0.060 0.193 0.122 0.291 0.179 0.194 0.118 0.391 0.231 0.59 0.343 0.398 0.221 0.803 0.431 1.211 0.633 0.529 0.278 1.346 0.658 2.176 1.016l0.31 0.119c0.838 0.355 1.683 0.695 2.536 1.017l0.32 0.119c0.054 0.019 0.107 0.041 0.16 0.061 0.233 0.090 0.508 0.168 0.793 0.219l0.028 0.004c0.224 0.038 0.451 0.057 0.678 0.041 0.226-0.014 0.451-0.065 0.65-0.176l0.009 0.017z"
        ></path>
        <path
          fill="#545454"
          style={{ fill: 'var(--color5, #545454)' }}
          d="M21.989 25.843l-0.436 0.469c-0.131 0.14-0.285 0.303-0.45 0.477-0.165 0.174-0.341 0.36-0.518 0.544l-0.262 0.278c-0.086 0.093-0.171 0.182-0.256 0.267-0.086 0.084-0.169 0.165-0.25 0.239-0.041 0.036-0.080 0.073-0.119 0.108-0.054 0.046-0.091 0.078-0.127 0.11l0.014-0.012c-0.293 0.252-0.503 0.4-0.503 0.4l-0.011-0.014s0.158-0.207 0.417-0.488l0.21-0.226c0.163-0.176 0.329-0.339 0.502-0.496l0.007-0.006 0.279-0.26c0.373-0.351 0.742-0.705 1.023-0.966l0.469-0.436 0.012 0.012z"
        ></path>
        <path
          fill="none"
          stroke="#a74d4a"
          style={{ stroke: 'var(--color4, #a74d4a)' }}
          strokeLinejoin="miter"
          strokeLinecap="butt"
          strokeMiterlimit="4"
          strokeWidth="1.7143"
          d="M31.143 16c0 8.363-6.78 15.143-15.143 15.143s-15.143-6.78-15.143-15.143c0-8.363 6.78-15.143 15.143-15.143s15.143 6.78 15.143 15.143z"
        ></path>
      </svg>
      <SC.TextContainer>
        <SC.LogoText>MaxiBud</SC.LogoText>
        <SC.LogoTextAccent>Expert</SC.LogoTextAccent>
      </SC.TextContainer>
    </SC.LogoContainer>
  );
};
