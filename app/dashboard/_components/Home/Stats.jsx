import React from 'react';

function Testimonials() {
  return (
    <div id="stats">
      <div className=" max-w-3xl text-center px-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-left">What Our Users Are Saying</h2>

        <p className="mt-4 text-gray-400 text-left">
          Discover how our AI Interview Mock App has helped job seekers like you excel in their interviews. Our users
          have experienced transformative results, from improved confidence to landing their dream jobs.
          <br />
          <i className="mt-4">
            You could also include a call-to-action encouraging users to share their own experiences, like: "Join our
            community and share your success story!
          </i>
        </p>
      </div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Our Impact in Numbers</dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">5k</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Success in Stats</dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">64%</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Our Achievements overall</dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
