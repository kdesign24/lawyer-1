
export const siteConfig = {
  navigation: [
    {
      name: "Our Firm",
      slug: "our-firm",
      subItems: [
        { name: "Kevin J. McCarthy, Esq.", slug: "team/kevin-mccarthy" },
        { name: "Michael J. Winkelman, Esq.", slug: "team/michael-winkelman" },
        { name: "Christian C. Mester, Esq.", slug: "team/christian-mester" },
        { name: "Courtney D. Thomas, Esq.", slug: "team/courtney-thomas" },
        { name: "Nurse Consultants", slug: "nurse-consultants" },
        { name: "Awards & Honors", slug: "awards" },
      ]
    },
    {
      name: "Practice Areas",
      slug: "practice-areas",
      subItems: [
        { 
          name: "Auto Accidents", 
          slug: "practice/auto-accidents",
          children: ["Bus Accidents", "Car Accidents", "Drunk Driving Accidents", "Motorcycle Accidents", "Pedestrian Accidents", "Truck Accidents"]
        },
        { 
          name: "Medical Malpractice", 
          slug: "practice/medical-malpractice",
          children: ["Surgical Errors", "Diagnosis Errors", "Birth Injuries", "Hospital Negligence"]
        },
        { name: "Construction Accidents", slug: "practice/construction" },
        { name: "Defective Products", slug: "practice/defective-products" },
        { name: "Dog Bites", slug: "practice/dog-bites" },
        { name: "Nursing Home Neglect", slug: "practice/nursing-home" },
        { name: "Slip And Falls", slug: "practice/slip-and-falls" },
        { name: "Work Injuries", slug: "practice/work-injuries" },
        { name: "Wrongful Death", slug: "practice/wrongful-death" },
        { name: "Civil Rights", slug: "practice/civil-rights" },
      ]
    },
    { name: "Results", slug: "results" },
    { name: "Referrals", slug: "referrals" },
    { name: "Reviews", slug: "reviews" },
    { name: "Blogs", slug: "blogs" },
    { name: "Videos", slug: "videos" },
    { name: "Contact", slug: "contact" }
  ],
  pages: {
    "our-firm": {
      title: "Our Firm",
      subtitle: "Serving Maryland, Washington D.C. & Virginia",
      heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
      content: `
        <p>McCarthy, Winkelman & Mester, L.L.P. is an experienced personal injury law firm located in Prince George's County that serves clients in Maryland, Virginia and Washington D.C. Our legal team is dedicated to helping our clients when they need it most. We have been a trusted legal resource in the state of Maryland for years, and we are proud to provide our clients with the honest and direct legal advice they require to attain a positive outcome in their legal matters.</p>
        <p>If you've been hurt due to no fault of your own, you can depend on an experienced Prince George's County personal injury lawyer right here at McCarthy, Winkelman & Mester, L.L.P. to fight for the outcome you deserve. Contact us today to learn more about how we can assist you.</p>
        
        <h2 class="text-2xl font-serif text-legal-blue mt-8 mb-4 border-b-2 border-legal-gold inline-block">Our Attorneys</h2>
        <p>Our firm comprises attorneys with decades of experience helping accident victims in the state of Maryland. To learn more about our legal team, simply click one of the links below:</p>
        <ul class="list-disc pl-6 space-y-2 text-cyan-800 font-semibold mt-4">
          <li>Kevin J. McCarthy, Esq.</li>
          <li>Michael J. Winkelman, Esq.</li>
          <li>Christian C. Mester, Esq.</li>
          <li>Courtney D. Thomas, Esq.</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-legal-blue mt-12 mb-4 border-b-2 border-legal-gold inline-block">Our Litigation Record</h2>
        <p>Our attorneys have won large verdicts at trial, compensating clients for their injuries and losses. Some examples include:</p>
        <ul class="list-disc pl-6 space-y-4 mt-4">
          <li><strong>$5,456,896 verdict</strong> against Prince George's Hospital Center for a client whose leg was amputated because of a delay in performing surgery.</li>
          <li><strong>$2,884,500 verdict</strong> obtained for the family of a man killed in a construction site accident.</li>
          <li>An <strong>unspecified verdict</strong> for a young man who required stitches after a police officer punched him.</li>
        </ul>

        <h2 class="text-2xl font-serif text-legal-blue mt-12 mb-4 border-b-2 border-legal-gold inline-block">Our Objective</h2>
        <p>We are a results-driven firm, and we believe that our job isn't finished until our clients are happy. We will fight for you, every step of the way. Contact McCarthy, Winkelman & Mester, L.L.P. to schedule your initial consultation with our firm today.</p>
      `,
      showSidebar: true
    },
    "practice/bus-accidents": {
      title: "Prince George's County Bus Accident Lawyer",
      subtitle: "Serving Maryland, Washington D.C. & Virginia",
      heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
      content: `
        <p>Bus accidents are very serious and often traumatic experiences for all parties involved, and if you've been wrongfully injured in a bus accident, you should contact an experienced Prince George's County bus accident lawyer here at McCarthy, Winkelman & Mester, L.L.P. today. We are on your side and are prepared to guide you through every step of the process ahead.</p>
        
        <h3 class="text-xl font-bold text-legal-blue mt-8">Prince George's County Bus Accident Lawyer | Serving MD, VA, & D.C.</h3>
        <p>After a bus accident, you may feel unsure of where to turn. Fortunately, you've come to the right place. Speak with a knowledgeable Prince George's County auto accident lawyer right here at McCarthy, Winkelman & Mester, L.L.P. Our firm is here to help.</p>

        <h2 class="text-2xl font-serif text-legal-blue mt-12 mb-4 border-b-2 border-legal-gold inline-block">How Do Bus Accidents Happen?</h2>
        <p>As you can imagine, bus accidents can happen for many different reasons. Sometimes, inclement weather conditions or poor road conditions can lead to serious accidents. However, in most cases, bus accidents are caused by driver negligence. In some cases, the negligence can be on the part of a bus driver, and other times, it can be on the part of other motorists. Some of the most common types of bus driver negligence are as follows:</p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
          <li>Unsafely discharging passengers</li>
          <li>Sudden stops and starts</li>
          <li>Failing to account for large blind spots before merging/changing lanes</li>
          <li>Failing to use the brakes on time</li>
          <li>Driving while fatigued, under the influence, or while distracted</li>
          <li>Speeding</li>
          <li>Ignoring traffic lights/signs</li>
        </ul>

        <h2 class="text-2xl font-serif text-legal-blue mt-12 mb-4 border-b-2 border-legal-gold inline-block">Gathering Evidence</h2>
        <p>When a bus crashes, there is a very good chance that multiple passengers will sustain serious injuries. As an injured passenger, after calling 911 to the scene of the accident, you should ask all other passengers for their contact information. You should also take pictures/videos of the scene of the accident and your injuries.</p>
      `,
      showSidebar: true
    }
  }
};
