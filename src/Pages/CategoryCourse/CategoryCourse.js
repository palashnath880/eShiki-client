import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CourseItem from '../../components/CourseItem/CourseItem';
import CoursesSidebar from '../../components/CoursesSidebar/CoursesSidebar';
import { CourseContext } from '../../contexts/CoursesContext';

const CategoryCourse = () => {
    const courses = useLoaderData();
    const params = useParams();
    const { courseCategory } = useContext(CourseContext);

    const categoryName = courseCategory && courseCategory.length > 0 && params.categoryId ? courseCategory.find(item => parseInt(item.id) === parseInt(params.categoryId)) : '';

    return (
        <div className='container mx-auto'>
            <div className='flex flex-row'>
                <div className='w-3/12'>
                    <CoursesSidebar />
                </div>
                <div className='flex-1'>
                    <div className='px-5 my-10'>
                        <h2 className='py-3 text-center text-2xl mb-3 border-b'>{categoryName.name}</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            {
                                courses.length <= 0 && <h1 className='py-2 text-center my-5'>No Course Found</h1>
                            }
                            {
                                courses.length > 0 && courses.map((course, index) => <CourseItem key={index} course={course} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryCourse;
