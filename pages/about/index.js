function About() {
  // I need th econtent of a portfolio page, for now I jsut need it to say the title "Porfolio Page" and to have some placeholder text describing what it is. This is a component inside a layout of a page. It should be decorated using TailwindCSS and NextJS. THe background of the text should be white and the text should be black. The text should be centered in the page. The syling should be consistent with the Home component. 
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    About Page
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        This is the About page
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
            </div>
        </div>
    );


}

export default About;
