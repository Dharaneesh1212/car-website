import Carousels from "./carousel";

const Gallery = () => {
  return (
    <main id="galery" className="bg-black h-screen">
      <div id="carousel" className="animate__animated animate__zoomIn">
        <Carousels />
      </div>
      <main id="review" className="w-full flex items-center justify-center flex-wrap bg-black text-white pt-8 gap-10 pb-10">
        <div id="set-one" className="flex items-center justify-center gap-10">
          <div
            id="card-one"
            className="animate__animated animate__zoomIn h-[25rem] w-[25rem] gap-6 flex items-center justify-center flex-col bg-zinc-900 rounded-lg p-4"
          >
            <div className="flex items-start justify-center flex-col text-lg">
              <span>John D</span>
              <span>Rating: ⭐⭐⭐⭐⭐</span>
              <span>Date: July 20, 2024</span>
            </div>
            <div>
              <p>
                I had an exceptional experience at Autowork Car Service. From
                the moment I walked in, the staff were friendly and
                professional. They diagnosed my car's issue quickly and provided
                a detailed explanation of the necessary repairs. The service was
                completed ahead of schedule, and my car runs better than ever.
                The waiting area was clean and comfortable, with complimentary
                refreshments. I highly recommend Autowork Car Service for anyone
                in need of reliable and efficient car maintenance.
              </p>
            </div>
          </div>
          <div
            id="card-two"
            className="animate__animated animate__zoomIn h-[25rem] w-[25rem] gap-6 flex items-center justify-center flex-col bg-zinc-900 rounded-lg p-4"
          >
            <div className="flex items-start justify-center flex-col text-lg">
              <span>Sarah M</span>
              <span>Rating: ⭐⭐⭐</span>
              <span>Date: July 18, 2024</span>
            </div>
            <div>
              <p>
                Autowork Car Service was decent. The staff were polite, and they
                did fix the issue with my car. However, the service took longer
                than expected, and I felt the communication could have been
                better. They didn't provide updates on the progress, and I had
                to call to check on the status. The waiting area was okay but
                could use some improvement. Overall, it was an average
                experience, and I might consider giving them another try in the
                future.
              </p>
            </div>
          </div>
          <div
            id="card-three"
            className="animate__animated animate__zoomIn h-[25rem] w-[25rem] gap-6 flex items-center justify-center flex-col bg-zinc-900 rounded-lg p-4"
          >
            <div className="flex items-start justify-center flex-col text-lg">
              <span>Michael J</span>
              <span>Rating: ⭐⭐⭐⭐⭐</span>
              <span>Date: July 28, 2024</span>
            </div>
            <div>
              <p>
                Autowork Car Service exceeded my expectations in every way. I
                brought my car in for a routine oil change and a check-up on a
                weird noise I’d been hearing.They took the time to explain what
                was causing the noise and provided a couple of options for
                repair. I appreciated the transparency and the lack of pressure
                to choose the most expensive option.The waiting area was
                comfortable, with free Wi-Fi and refreshments. What stood out
                the most was the follow-up call a few days later to ensure
                everything was running smoothly.
              </p>
            </div>
          </div>
        </div>
        <div id="set-two" className="flex items-center justify-center gap-10">
          <div
            id="card-four"
            className="animate__animated animate__zoomIn h-[25rem] w-[25rem] gap-6 flex items-center justify-center flex-col bg-zinc-900 rounded-lg p-4"
          >
            <div className="flex items-start justify-center flex-col text-lg">
              <span>Emily K</span>
              <span>Rating: ⭐⭐</span>
              <span>Date: July 15, 2024</span>
            </div>
            <div>
              <p>
                I was disappointed with my experience at XYZ Car Service. The
                staff were somewhat indifferent, and it took a long time for
                someone to attend to me. The repair process was slow, and I felt
                like they weren't very transparent about the issues with my car.
                When I finally got my car back, it had the same problem a few
                days later. The waiting area was cramped and uncomfortable.
                Unfortunately, I don't think I'll be returning to Autoworks Car
                Service.
              </p>
            </div>
          </div>
          <div
            id="card-five"
            className="animate__animated animate__zoomIn h-[25rem] w-[25rem] gap-6 flex items-center justify-center flex-col bg-zinc-900 rounded-lg p-4"
          >
            <div className="flex items-start justify-center flex-col text-lg">
              <span>Brain</span>
              <span>Rating: ⭐⭐⭐</span>
              <span>Date: July 11, 2024</span>
            </div>
            <div>
              <p>
                My experience with XYZ Car Service was a mixed bag. On one hand,
                the staff were friendly and seemed knowledgeable. They diagnosed
                my car's transmission issue accurately and explained the repair
                process clearly. However, the repair took longer than promised,
                and there were additional charges that were not initially
                mentioned. The waiting area was clean, but it lacked adequate
                seating. While the quality of the repair was good, the delays
                and unexpected costs were disappointing.
              </p>
            </div>
          </div>
          <div
            id="card-six"
            className="animate__animated animate__zoomIn h-[25rem] w-[25rem] gap-6 flex items-center justify-center flex-col bg-zinc-900 rounded-lg p-4"
          >
            <div className="flex items-start justify-center flex-col text-lg">
              <span>Clarie</span>
              <span>Rating: ⭐⭐⭐⭐⭐</span>
              <span>Date: July 01, 2024</span>
            </div>
            <div>
              <p>
                I had an incredible experience with Autoworks Car Service. They
                went above and beyond to accommodate my busy schedule, fitting
                me in for an urgent brake repair. The staff were extremely
                courteous and knowledgeable. They provided a thorough inspection
                and detailed explanation of the issue. The repair was done
                swiftly, and my car feels safer than ever. The complimentary car
                wash and interior vacuum were a nice touch. I will definitely
                recommend Autoworks Car Service to friends and family.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Gallery;
