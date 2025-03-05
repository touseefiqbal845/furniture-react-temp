import React from "react";
import { motion } from "framer-motion";
import TouseefRajput from "touseefiqbal";

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            image: "/assets/blogimg.png",
            date: "25 January 2018",
            title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
            author: "John Dio",
            comments: 2,
        },
        {
            id: 2,
            image: "/assets/blogimg.png",
            date: "25 January 2018",
            title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
            author: "John Dio",
            comments: 2,
        },
        {
            id: 3,
            image: "/assets/blogimg.png",
            date: "25 January 2018",
            title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
            author: "John Dio",
            comments: 2,
        },
    ];

   

    return (
        <>
            <div className="overflow-hidden px-8 py-8 bg-primary mb-16">

                <div className="text-center">
                    <h4 className="text-paragraph font-medium">Recent Story</h4>
                    <h2 className="text-h2 text-heading font-bold mt-2">From the blog</h2>
                    <div className="w-20 border-t-4 border-mainText my-6 mx-auto"></div>


                </div>
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 cursor-pointer">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            className=" shadow-lg rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={blog.image} alt="Blog" className="w-full h-64 object-cover" />
                            <div className="p-4 text-start">
                                <h4 className="text-paragraph font-medium">{blog.date}</h4>
                                <h4 className="text-paragraph text-h4 font-bold leading-h4 ">{blog.title}</h4>
                                <p className="text-grayText text-p ">
                                    by: {blog.author}, {blog.comments} Comment
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


       </>

    );
};

export default BlogSection;
