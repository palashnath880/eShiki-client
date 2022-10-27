import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='w-7/12 mx-auto'>
                <div className='rounded-md bg-base-100 p-3 border shadow-lg mb-3'>
                    <h1 className='text-2xl font-semibold'>What is cors?</h1>
                    <p className='mt-2'>Cross-Origin Resource Sharing, In short, is called (CORS). CORS is an HTTP-header-based mechanism that allows a server to indicate a source (domain, or port) other than its own from which to allow a browser to load resources. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.</p>
                </div>
                <div className='rounded-md bg-base-100 p-3 border shadow-lg mb-3'>
                    <h1 className='text-2xl font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='mt-2'>
                        Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                    </p>
                    <p className='mt-1'>
                        There are many other tools alternative to Firebase for authentication example (Auth0, Okta, and Amazon Cognito ).
                    </p>
                </div>
                <div className='rounded-md bg-base-100 p-3 border shadow-lg mb-3'>
                    <h1 className='text-2xl font-semibold'>How does the private route work?</h1>
                    <p className='mt-2'>
                        The private route component is similar to the public route, change the redirect URL based on authenticates condition. If the user is not authenticated he will be redirected to the login page or public route and the user can only access the private routes If the user is authenticated.
                    </p>
                </div>
                <div className='rounded-md bg-base-100 p-3 border shadow-lg mb-3'>
                    <h1 className='text-2xl font-semibold'>What is Node? How does Node work?</h1>
                    <p className='mt-2'>
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment. That achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.
                        Node.js runs on a JavaScript Engine ( V8 engine ) and executes JavaScript code outside a web browser.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
