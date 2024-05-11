const QuesAAns = () => {
  return (
    <div className=" mt-10 bg-rose-300 rounded-md w-full md:max-w-[90%] mx-auto">
      <div className=" md:flex gap-5 p-5">
        <div className=" flex-1 p-3">
          <h1 className="text-2xl font-bold md:text-4xl">
            Have Any Questions About DOCCARE Information?
          </h1>
          <div className=" mt-5">
            <div className="collapse collapse-arrow bg-base-200 mb-1">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Is my medical information secure on DocCare?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, DocCare takes patient privacy and data security
                  seriously. The platform uses encryption and other security
                  measures to protect your personal and medical information.
                  Your data is stored securely and only accessible to authorized
                  healthcare professionals.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-1">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What services does DocCare provide?
              </div>
              <div className="collapse-content">
                <p>
                  DocCare offers a range of healthcare services, including
                  online appointment scheduling, telemedicine consultations,
                  access to medical records, prescription refills, and health
                  information resources.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I access my medical records through DocCare?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely. DocCare provides patients with access to their
                  medical records through a secure online portal. You can view
                  your lab results, medication history, treatment plans, and
                  more from anywhere with an internet connection.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I use DocCare for urgent medical issues?
              </div>
              <div className="collapse-content">
                <p>
                  While DocCare provides telemedicine consultations, it's
                  essential to note that it may not be suitable for emergency
                  medical situations. In case of a medical emergency, it's best
                  to seek immediate assistance by calling emergency services or
                  visiting the nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <img
            className=" w-full h-[90vh]"
            src="https://i.ibb.co/XZRrW8c/serv-2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuesAAns;
