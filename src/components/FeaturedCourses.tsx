"use client"
import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
interface Course{
    id: Number,
    title: String,
    slug: String,
    description: String,
    price: Number,
    instructor: String,
    isFeatured: boolean,
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="text-white">
      <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="font-bold text-base text-teal-600 tracking-wide uppercase">
                    FEATURED COURSES
                </h2>
                <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="  text-teal-200 p-4 sm:p-6 flex flex-col items-center text-center flex-grow">

                                <p className="text-lg sm:text-xl mt-4 mb-2 dark:text-neutral-200 font-semibold underline">{course.title}</p>

                                <p className="text-sm ">{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className="pt-2 font-semibold">
                                    Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="my-20 text-center">
            <Link href={"./courses"} className="px-4 py-2 border border-neutral-600 rounded-md font-semibold text-neutral-700 bg-white hover:bg-gray-200 transition duration-200">
                View All Courses
            </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCourses
