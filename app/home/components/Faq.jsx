const Faq = () => {
  return (
    <section className="bg-white rounded-44px py-16">
      <div className="container">
        <div>
          <p className="font-semibold  mb-6 ">الأسئلة الشائعة</p>
          <h2 className="font-semibold text-52px  mb-5">
            أسئلة كثير نسمعها… جاوبنا عليها
          </h2>
          <p className="font-normal text-22px text-white mb-16 sm:w-[57%] mx-auto mb-6">
            احصل على إجابات واضحة للأسئلة الشائعة لتسهيل فهمك وتحقيق النجاح.
          </p>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
