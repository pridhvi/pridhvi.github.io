import React from 'react'

const SkillsComponent = () => {
    return (
        <div className='bg-gray p-4 mb-3 mb-md-5 wd-rounded-border wd-text-gray shadow-lg'>

            <h4 className='text-warning'>
                Skills
            </h4>

            <div className='row mt-3'>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 512 512"
                        fill="#61DBFB"
                        height="2em"
                        width="2em"
                    >
                        <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" />
                        <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" />
                    </svg>
                    <span>  React</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="#E34C26"
                        height="2em"
                        width="2em"
                    >
                        <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                    </svg>
                    <span>  HTML</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 32 32"
                        fill="#3C99DC"
                        height="2em"
                        width="2em"
                    >
                        <path
                            fill="#3C99DC"
                            d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                        />
                    </svg>
                    <span>  CSS</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="#F0DB4F"
                        height="2em"
                        width="2em"
                    >
                        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
                    </svg>
                    <span>  JavaScript</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="#007acc"
                        height="2em"
                        width="2em"
                    >
                        <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z" />
                    </svg>
                    <span>TypeScript</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 576 512"
                        fill="#602C50"
                        height="2em"
                        width="2em"
                    >
                        <path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5c32.8-.1 50.9-13.3 50.9-36.9zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1C508.3 60 484.5 32 452.5 32H123.7C91.6 32 67.9 60.1 69 90.5c1 29.3-.3 67.2-9.8 98.1-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1 9.5 30.9 10.9 68.8 9.8 98.1-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5-1-29.3.3-67.2 9.8-98.1 9.6-31 25.7-50.6 52.1-53.1v-28.5c-26.3-2.5-42.5-22.1-52-53.1zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4 0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3 0 42.1-31.3 67.5-83.2 67.5zm-10-108.7h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5 0-25.7-18.6-38.9-54.5-38.9z" />
                    </svg>
                    <span>  Bootstrap</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 32 32"
                        fill="#4DB33D"
                        height="2em"
                        width="2em"
                    >
                        <path
                            fill="#3FA037"
                            d="M22.797 14.562a13.663 13.663 0 00-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 00-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372l-.13-.327c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066-1.463 1.924-2.752 3.981-3.511 6.29a14.691 14.691 0 00-.517 2.056c-.259 1.481-.379 2.92-.296 4.42.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 00-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 001.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"
                        />
                    </svg>
                    <span>  MongoDB</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="#68A063"
                        height="2em"
                        width="2em"
                    >
                        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z" />
                    </svg>
                    <span>  Node.js</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                    </svg>
                    <span>  Express</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="#764ABC"
                        height="2em"
                        width="2em"
                    >
                        <path d="M15.661 15.549a1.315 1.315 0 001.185-1.386 1.363 1.363 0 00-1.35-1.302h-.048a1.352 1.352 0 00-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 011.658-1.931 7.88 7.88 0 01-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z" />
                        <path d="M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 001.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z" />
                        <path d="M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 001.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z" />
                    </svg>
                    <span>  Redux</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 32 32"
                        fill="#f89820"
                        height="2em"
                        width="2em"
                    >
                        <path
                            fill="#5382a1"
                            d="M12.557 23.22s-.982.571.699.765c2.037.232 3.079.199 5.324-.226 0 0 .59.37 1.415.691-5.033 2.157-11.39-.125-7.437-1.23zm-.615-2.815s-1.102.816.581.99c2.176.224 3.895.243 6.869-.33 0 0 .411.417 1.058.645-6.085 1.779-12.863.14-8.508-1.305zm5.185-4.775c1.24 1.428-.326 2.713-.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zm6.656 9.672s.727.599-.801 1.062c-2.905.88-12.091 1.146-14.643.035-.917-.399.803-.953 1.344-1.069.564-.122.887-.1.887-.1-1.02-.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-.749 16.044-1.95zm-10.754-7.813s-4.673 1.11-1.655 1.513c1.274.171 3.814.132 6.181-.066 1.934-.163 3.876-.51 3.876-.51s-.682.292-1.175.629c-4.745 1.248-13.911.667-11.272-.609 2.232-1.079 4.046-.956 4.046-.956zm8.383 4.685c4.824-2.506 2.593-4.915 1.037-4.591-.382.079-.552.148-.552.148s.142-.222.412-.318c3.079-1.083 5.448 3.193-.994 4.887 0 0 .075-.067.097-.126zM18.503 3.337s2.671 2.672-2.534 6.781c-4.174 3.296-.952 5.176-.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zm-5 25.629c4.63.296 11.74-.164 11.908-2.355 0 0-.324.831-3.826 1.49-3.952.744-8.826.657-11.716.18 0 0 .592.49 3.635.685z"
                        />
                    </svg>
                    <span>  Java</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="#0db7ed"
                        height="2em"
                        width="2em"
                    >
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137a15.74 15.74 0 002.93-.266 12.248 12.248 0 003.823-1.389 10.51 10.51 0 002.61-2.136c1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
                    </svg>
                    <span>  Docker</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 32 32"
                        fill="white"
                        height="2em"
                        width="2em"
                    >
                        <path
                            fill="black"
                            d="M15.534 8.411c0 .102-.102.102-.102.102h-.102c-.102 0-.102-.102-.204-.204 0 0-.102-.102-.102-.204s0-.102.102-.102l.204.102c.102.102.204.204.204.306zm-1.836-1.02c0-.51-.204-.816-.51-.816 0 0 0 .102-.102.102v.204h.306c0 .204.102.306.102.51h.204zm3.57-.51c.204 0 .306.204.408.51h.204c-.102-.102-.102-.204-.102-.306s0-.204-.102-.306-.204-.204-.306-.204c0 0-.102.102-.204.102 0 .102.102.102.102.204zm-3.06 1.632c-.102 0-.102 0-.102-.102s0-.204.102-.306a.447.447 0 00.306-.102c.102 0 .102.102.102.102 0 .102-.102.204-.306.408h-.102zm-1.122-.102c-.408-.204-.51-.51-.51-1.02 0-.306 0-.51.204-.714.102-.204.306-.306.51-.306s.306.102.51.306c.102.306.204.612.204.918v.204h.102v-.102c.102 0 .102-.204.102-.612 0-.306 0-.612-.204-.918s-.408-.51-.816-.51a.767.767 0 00-.714.51c-.204.408-.245.714-.245 1.224 0 .408.143.816.551 1.224.102-.102.204-.102.306-.204zm12.748 14.38c.102 0 .102-.041.102-.133 0-.224-.102-.489-.408-.785-.306-.306-.816-.5-1.428-.581-.102-.01-.204-.01-.204-.01-.102-.02-.102-.02-.204-.02a5.681 5.681 0 01-.408-.051 8.112 8.112 0 00.408-2.519c0-1.02-.204-1.734-.612-2.346s-.816-.918-1.326-1.02c-.102.102-.102.102-.102.204.51.204 1.02.612 1.326 1.224.306.714.408 1.326.408 2.04 0 .571-.102 1.418-.51 2.499-.408.163-.816.54-1.122 1.132 0 .092 0 .143.102.143 0 0 .102-.092.204-.265.204-.173.306-.347.51-.52.306-.173.51-.265.816-.265.51 0 1.02.071 1.326.214.408.133.612.275.714.439.102.153.204.296.306.428 0 .132.102.194.102.194zM16.452 8.003c-.102-.102-.102-.306-.102-.51 0-.408 0-.612.204-.918.204-.204.408-.306.612-.306.306 0 .51.204.714.408.102.306.204.51.204.816 0 .51-.204.816-.612.918 0 0 .102.102.204.102.204 0 .306.102.51.204.102-.612.204-1.02.204-1.53 0-.612-.102-1.02-.306-1.326-.306-.306-.612-.408-1.02-.408-.306 0-.612.102-.918.306-.204.306-.306.51-.306.816 0 .51.102.918.306 1.326.102 0 .204.102.306.102zm1.224 1.632c-1.326.918-2.346 1.326-3.162 1.326-.714 0-1.428-.306-2.04-.816.102.204.204.408.306.51l.612.612c.408.408.918.612 1.428.612.714 0 1.53-.408 2.55-1.122l.918-.612c.204-.204.408-.408.408-.714 0-.102 0-.204-.102-.204-.102-.204-.612-.51-1.632-.816-.918-.408-1.632-.612-2.04-.612-.306 0-.816.204-1.53.612-.612.408-1.02.816-1.02 1.224 0 0 .102.102.204.306.612.51 1.224.816 1.836.816.816 0 1.836-.408 3.162-1.428v.204c.102 0 .102.102.102.102zm2.345 20.601c.408.767 1.122 1.152 1.938 1.152.204 0 .408-.031.612-.092.204-.041.408-.112.51-.194.102-.071.204-.143.306-.224.204-.071.204-.122.306-.173l1.734-1.499c.408-.325.816-.61 1.326-.857.408-.245.816-.408 1.02-.5.306-.082.51-.204.714-.367.102-.153.204-.347.204-.592 0-.296-.204-.52-.408-.683s-.408-.275-.612-.347-.408-.235-.714-.51a2.747 2.747 0 01-.51-1.112l-.102-.591c-.102-.275-.102-.479-.204-.592 0-.031 0-.041-.102-.041s-.306.092-.408.265c-.204.173-.408.367-.612.571-.102.204-.408.387-.612.561-.306.173-.612.265-.816.265-.816 0-1.224-.224-1.53-.663-.204-.326-.306-.704-.408-1.132-.204-.173-.306-.265-.51-.265-.51 0-.714.53-.714 1.601v3.172c0 .092-.102.296-.102.612-.102.316-.102.675-.102 1.081l-.204 1.132v.017zm-14.788-.543c.948.139 2.04.435 3.274.888 1.234.449 1.989.683 2.264.683.714 0 1.306-.316 1.795-.927.102-.198.102-.43.102-.698 0-.964-.581-2.183-1.744-3.661l-.694-.928c-.143-.194-.316-.49-.54-.887a8.645 8.645 0 00-.561-.918c-.133-.235-.347-.469-.622-.704a2.092 2.092 0 00-.908-.469c-.428.082-.724.224-.867.418s-.224.408-.245.632c-.031.214-.092.357-.194.428-.102.061-.275.112-.51.163-.051 0-.143 0-.275.01h-.275c-.541 0-.908.061-1.101.163a1.497 1.497 0 00-.388.989c0 .163.041.439.122.826.082.377.122.683.122.897 0 .418-.122.836-.377 1.254-.255.439-.388.765-.388.997.102.396.775.674 2.009.837zm3.396-9.273c0-.704.184-1.479.561-2.397.367-.918.734-1.53 1.091-1.938-.02-.102-.071-.102-.153-.102l-.102-.102c-.296.306-.653 1.02-1.081 2.04-.428.918-.653 1.764-.653 2.387 0 .459.112.857.316 1.203.224.337.765.826 1.622 1.448l1.081.704c1.152 1 1.764 1.693 1.764 2.101 0 .214-.102.428-.408.663-.204.245-.479.367-.714.367-.02 0-.031.02-.031.071 0 .01.102.214.316.612.428.581 1.346.867 2.57.867 2.244 0 3.977-.918 5.303-2.754 0-.51 0-.826-.102-.959v-.377c0-.663.102-1.163.306-1.489s.408-.479.714-.479c.204 0 .408.071.612.224.102-.785.102-1.469.102-2.081 0-.928 0-1.693-.204-2.407a5.376 5.376 0 00-.51-1.53l-.612-.918c-.204-.306-.306-.612-.51-.918-.102-.408-.204-.714-.204-1.224-.306-.51-.51-1.02-.816-1.53-.204-.51-.408-1.02-.612-1.428l-.918.714c-1.02.714-1.836 1.02-2.55 1.02-.612 0-1.122-.102-1.428-.51l-.612-.51c0 .306-.102.714-.306 1.122l-.643 1.224c-.286.714-.438 1.122-.469 1.428-.041.204-.071.408-.092.408l-.765 1.53c-.826 1.53-1.244 2.947-1.244 4.12 0 .235.02.479.061.724-.459-.316-.683-.755-.683-1.326zm7.303 9.648c-1.326 0-2.346.18-3.06.535v-.031c-.51.612-1.081.928-1.877.928-.5 0-1.285-.194-2.346-.581-1.071-.367-2.019-.649-2.845-.834a6.337 6.337 0 00-.561-.105 20.908 20.908 0 01-.785-.14 5.904 5.904 0 01-.724-.209 1.808 1.808 0 01-.612-.313c-.141-.129-.21-.273-.21-.436s.035-.337.104-.523c.065-.112.137-.224.208-.326.071-.112.133-.214.173-.316.061-.092.102-.184.143-.286.041-.092.082-.184.102-.296.02-.102.041-.204.041-.306s-.041-.408-.122-.948c-.082-.53-.122-.867-.122-1.01 0-.449.102-.806.326-1.061s.439-.388.663-.388h1.173c.092 0 .235-.051.449-.173.071-.163.133-.296.173-.418.051-.122.071-.214.092-.255.02-.061.041-.122.061-.173a1.48 1.48 0 01.163-.235.616.616 0 01-.122-.398c0-.112 0-.214.02-.275 0-.367.173-.887.54-1.571l.357-.643c.296-.551.52-.959.683-1.367.173-.408.357-1.02.561-1.836.163-.714.551-1.428 1.163-2.142l.765-.918c.53-.612.877-1.122 1.071-1.53s.296-.918.296-1.326c0-.204-.051-.816-.163-1.836a30.27 30.27 0 01-.153-2.958c0-.714.061-1.224.194-1.734s.367-1.02.714-1.428c.306-.408.714-.816 1.326-1.02S15.117.88 15.933.88c.306 0 .612 0 .918.102.306 0 .714.102 1.224.306.408.204.816.408 1.122.714.408.306.714.816 1.02 1.326.204.612.408 1.224.51 2.04.102.51.102 1.02.204 1.734 0 .612.102 1.02.102 1.326.102.306.102.714.204 1.224.102.408.204.816.408 1.122.204.408.408.816.714 1.224.306.51.714 1.02 1.122 1.632.918 1.02 1.632 2.142 2.04 3.263.51 1.02.816 2.346.816 3.763a6.93 6.93 0 01-.306 2.05c.204 0 .306.082.408.224s.204.449.306.928l.102.755c.102.224.204.439.51.622.204.184.408.337.714.459.204.102.51.245.714.428.204.204.306.418.306.642 0 .347-.102.602-.306.785a1.6 1.6 0 01-.714.439c-.204.102-.612.306-1.224.594-.51.302-1.02.668-1.53 1.101l-1.02.868a5.67 5.67 0 01-1.122.857c-.306.184-.714.275-1.122.275l-.714-.082c-.816-.214-1.326-.622-1.632-1.244-1.632-.198-2.958-.296-3.774-.296z"
                        />
                    </svg>
                    <span>  Linux</span>
                </p>

                <p className='col-6 col-sm-3 col-lg-4 col-xl-3'>
                    <svg
                        viewBox="0 0 32 32"
                        fill="#FFE873"
                        height="2em"
                        width="2em"
                    >
                        <path
                            fill="#4B8BBE"
                            d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756V7.96c0-1.47-1.24-2.574-2.712-2.819-.932-.155-1.898-.226-2.825-.221s-1.813.083-2.592.221c-2.295.405-2.712 1.254-2.712 2.819v2.067h5.423v.689H8.527c-1.576 0-2.956.947-3.388 2.75-.498 2.066-.52 3.355 0 5.512.385 1.606 1.306 2.75 2.882 2.75h1.865V19.25c0-1.79 1.549-3.369 3.388-3.369zm-.342-7.231a1.024 1.024 0 01-1.018-1.03c0-.572.455-1.037 1.018-1.037.56 0 1.018.465 1.018 1.037 0 .57-.457 1.03-1.018 1.03zm13.893 4.816c-.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717.505 3.363.596 5.417 0 1.365-.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-.689h8.129c1.576 0 2.163-1.099 2.712-2.75.566-1.699.542-3.332 0-5.512zm-7.793 10.329c.562 0 1.018.461 1.018 1.03 0 .572-.456 1.037-1.018 1.037a1.03 1.03 0 01-1.018-1.037c0-.57.457-1.03 1.018-1.03z"
                        />
                    </svg>
                    <span>  Python</span>
                </p>

            </div>

        </div>
    )
}

export default SkillsComponent