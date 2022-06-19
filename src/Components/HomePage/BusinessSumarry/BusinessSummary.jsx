import React from "react";

const BusinessSummary = () => {
    return (
        <>
            <div
                id="services"
                className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
            >
                <div className="container xl:max-w-6xl mx-auto px-4">
                    {/* <!-- Heading start --> */}
                    <div className="text-center mx-auto mb-12 lg:px-20">
                        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
                            Business Summary
                        </h2>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 60"
                            className="mx-auto my-0 h-[35px]"
                            xmlSpace="preserve"
                        >
                            <circle
                                cx="50.1"
                                cy="30.4"
                                r="5"
                                className="stroke-primary"
                                style={{
                                    fill: "transparent",
                                    strokeWidth: "2",
                                    strokeMiterlimit: "10",
                                }}
                            ></circle>
                            <line
                                x1="55.1"
                                y1="30.4"
                                x2="100"
                                y2="30.4"
                                className="stroke-primary"
                                style={{
                                    strokeWidth: "2",
                                    strokeMiterlimit: "10",
                                }}
                            ></line>
                            <line
                                x1="45.1"
                                y1="30.4"
                                x2="0"
                                y2="30.4"
                                className="stroke-primary"
                                style={{
                                    strokeWidth: "2",
                                    strokeMiterlimit: "10",
                                }}
                            ></line>
                        </svg>
                        
                    </div>
                    {/* <!-- End heading --> */}
                    {/* <!-- row --> */}
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        <div
                            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                            data-wow-duration="1s"
                            style={{
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.3s",
                                animationName: "fadeInUP",
                            }}
                        >
                            {/* <!-- service block --> */}
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    {/* <!-- icon --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2rem"
                                        height="2rem"
                                        fill="currentColor"
                                        className="bi bi-card-checklist"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                                        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                                    Brand Identity
                                </h3>
                                <p className="text-gray-500">
                                    This is a wider card with supporting text
                                    below as a natural content.
                                </p>
                            </div>
                            {/* <!-- end service block --> */}
                        </div>
                        <div
                            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay=".1s"
                            style={{
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.3s",
                                animationName: "fadeInUP",
                            }}
                        >
                            {/* <!-- service block --> */}
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    {/* <!-- icon --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2rem"
                                        height="2rem"
                                        fill="currentColor"
                                        className="bi bi-wallet2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                                    Budget &amp; Marketing
                                </h3>
                                <p className="text-gray-500">
                                    This is a wider card with supporting text
                                    below as a natural content.
                                </p>
                            </div>
                            {/* <!-- end service block --> */}
                        </div>
                        <div
                            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                            style={{
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.3s",
                                animationName: "fadeInUP",
                            }}
                        >
                            {/* <!-- service block --> */}
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    {/* <!-- icon --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2rem"
                                        height="2rem"
                                        fill="currentColor"
                                        className="bi bi-funnel"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                                    Optimize conversions
                                </h3>
                                <p className="text-gray-500">
                                    This is a wider card with supporting text
                                    below as a natural content.
                                </p>
                            </div>
                            {/* <!-- end service block --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSummary;
