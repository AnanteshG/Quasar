import React from 'react'
import Feed from '@components/Feed'

const page = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover and Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> AI Generated Prompts</span>
            </h1>
            <p className="desc text-center"><span><strong>Quasar</strong></span> is a platform for sharing and discovering AI generated prompts. Share your own prompts and see what others have created.
            </p>
            <Feed />
        </section>
    )
}

export default page;
