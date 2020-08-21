import React from "react";

export const openC = {
    "Open a Condition": {
        title: "Hi there!",
        description: 
        <>
            <p>Interact with our model and select the area of the foot or ankle you are experiencing symptoms.</p>
        </>
    }
}

export const bigToeC = {
    "Ingrown Toenail": {
        title: "Ingrown Toenail",
        description: 
            <>
                <div className="t-image-border">
                    <img className="title-image" src={require('../2d-images/Ingrowing-Toenail.jpg')} alt="ingrown toenail images" />
                </div>
                <p>Ingrown toenails develop when the sides of the nail cut and pierce into the surrounding skin. This can cause pain, redness, swelling and possibly an infection.</p>
                <p>Common causes of an ingrown can include damage to the nail following a sports injury, an object dropping on the nail or alternatively inappropriate cutting of the nail.</p>
                <ul>
                    <li>Swelling</li>
                    <li>Redness</li>
                    <li>Pain</li>
                    <li>A hot sensation in the area</li>
                    <li>Pus</li>
                    <li>Bad odour</li>
                </ul>
                <p>If you do suspect an infection, or pain does not settle after a few days, then arrange an appointment with your specialist as soon as possible.</p>
                <h3>Treatments may include:</h3>
                <h4>Conservative Cut Back</h4>
                <p>If the issue is not too severe or infected, then your specialist may just need to cut or trim the nail. This can stop the nail from pushing into your skin and subsequently reduce pain, swelling and reduce the risk of an infection. A procedure may be advised at a later stage, especially if the ingrown nail is a recurrent problem.</p>
                <h4>Antibiotics</h4>
                <p>If the area is infected then your specialist may provide you with antibiotics, typically this is taken for one week. If symptoms persist following, then a procedure may be suggested.</p>
                <h4>Surgical Options</h4>
                <p>If you have a persistent ingrown toenail then your specialist may advise on a nail surgery procedure. Please click here to find out more.</p>
            </>
    },
    "Bunion": {
        title: "Bunion",
        description:
            <>
                <p>A Bunion, also known as Hallux Valgus, is a common foot condition involving the development of a bony growth below the base of the big toe.</p>
                <p>A Bunion is a progressive condition, meaning that without intervention it will get worse over time. As the Bunion ‘bump’ grows, the deformity can become increasingly painful when walking or running, cause footwear fitting issues and develop redness and swelling from excessive rubbing in footwear. The position of the big toe will also shift over time, often overlapping the lesser toes, which can cause further pain and discomfort. These symptoms can become quite severe, affecting daily activities and having a significant impact on quality of life.</p>
                <div style={{textAlign: "center"}}>
                    <img className="title-image" srcSet={require('../2d-images/Bunion-Severity-Progression.png')} alt="Bunion Severity Diagram" />
                </div>
                
                <h4>Causes of Bunions</h4>
                <p>There is no exact set of causes for Bunions, although likely causes are:</p>
                <ul>
                    <li>Hereditary factors - if your parents have Bunions it increases the risk of developing them</li>
                    <li>Foot Stress or Injuries</li>
                    <li>Arthritis - particularly rheumatoid arthritis</li>
                </ul>
                <p>Some experts believe the tight fitting high-pressure footwear, such as high heels, can cause or speed up the progression of Bunions. Certainly they can exacerbate painful symptoms.</p>
                <h4>Bunion Treatment and Prevention</h4>
                <p>There are several non surgical treatments for Bunions, including:</p>
                <ul>
                    <li>Wearing appropriate shoes with enough space in the toe box</li>
                    <li>Using protective cushioning or pads to reduce pain in footwear</li>
                    <li>Using toe spacers or night-splints to maintain space between the big toe and lesser toes</li>
                    <li>Using orthotics to reduce pressure away from the Bunion</li>
                </ul>
                <p>The above measures can help treat symptoms and prevent progression of the deformity. However, currently the only way to fully resolve the Bunion is with surgery.</p>
            </>
    }
};

export const ankleC = {
    "Sprain": {
        title: "Ankle Sprain",
        description: 
            <>
                <div className="t-image-border">
                    <img className="title-image" src={require('../2d-images/Ankle-Sprain.jpg')} alt="Ankle Sprain anatomy diagram" />
                </div>
                <p>Acute and chronic foot and ankle injuries are common amongst people of all age groups and activity levels. It is particularly common in people who are active in sports, whether it be recreational or professional. We specialise in accurate diagnosis of your injury with the help of our podiatric, physio and radiology team.</p>
                <p>An indication of a foot or ankle issue can include:</p>
                <ul>
                    <li>Sharp / Stabbing pain</li>
                    <li>Deep aching ankle feeling chronically bruised</li>
                    <li>Popping</li>
                    <li>Instability</li>
                    <li>Swelling with pain</li>
                    <li>Locking of the joint</li>
                </ul>
                <p>Foot and ankle injuries are typically managed conservatively where you should rest, ice, compress and elevate (RICE). However, further treatment can be suggested, which is why it is important to see a podiatric specialist to review and manage your treatment pathway.</p>
                <p>Following your assessment it is likely that an X-ray or MRI will be required to assess the degree of damage.</p>
                <h3>Treatments may include:</h3>
                <h4>Immobilisation</h4>
                <p>In order to promote healing and avoid further treatment / intervention, an air cast boot may be provided to keep the area immobile during activity.</p>
                <h4>Physiotherapy and strengthening</h4>
                <p>Once adequate healing has taken place our podiatric team may provide you with strengthening exercises. This again can help promote healing and reduce the risk of a repeat injury.</p>
                <h4>Orthotics, Bracing &amp; Taping</h4>
                <p>Following an injury, your foot / ankle may become unstable. Your podiatric specialist may advise on custom orthotics following a gait analysis. The orthotics can help improve foot stability and reduce the risk of a repeated injury.</p>
                <h4>Steroid and Platelet-rich plasma (PRP) injections</h4>
                <p>If pain persists in your foot / ankle then your specialist may advise on either a steroid or PRP injection.</p>
                <p>Typically the choice of substance for a steroid injection will be Cortisone, the steroid can reduce swelling and pain in your foot / ankle. It acts like a hormone, which is made naturally in your body and stops inflammation.</p>
                <p>Platelet-rich plasma (PRP) therapy uses your body’s own blood plasma with concentrated platelets. The platelets contain growth factors that repair and regenerate damaged tissue. By injecting your own platelets into the affected area the platelets will promote faster healing to the region.</p>
                <h4>Surgical Management</h4>
                <p>If symptoms persist, or you have a repeated or severe injury, then surgery may be suggested.</p>
            </>
    },
    "Ankle Arthritis": {
        title: "Arthritis",
        description: 
        <>
            <div className="t-image-border">
                <img className="title-image" src={require('../2d-images/Ankle-Arthritis.jpg')} alt="Ankle Arthritis anatomy diagram" />
            </div>
            <p>Ankle arthritis causes pain and stiffness in the joint. There are three bones in the ankle which are affected, the tibia, the fibula and the talus.</p>
            <h4>Symptoms of Ankle Arthritis can include:</h4>
            <ul>
                <li>Stiffness of the ankle</li>
                <li>Swelling around the joint</li>
                <li>Bone spurs</li>
                <li>Deformity of the joint</li>
                <li>Instability of the ankle</li>
            </ul>
            <h4>Ankle arthritis might arise from:</h4>
            <ul>
                <li>An injury leading to the development of Osteonecrosis, which can damage the blood flow to a portion of bone</li>
                <li>Rheumatoid disease, which causes joint inflammation and damage to cartilage</li>
                <li>Deterioration of cartilage due to age</li>
            </ul>
            <p>The first step would be to arrange a consultation with a podiatric specialist, they may refer for an X-ray to assess the issue.</p>
            <h3>Treatments may include:</h3>
            <h4>Physiotherapy and Strengthening</h4>
            <p>Your specialist may provide you with ankle strengthening exercises, alongside details on deep tissue massage. These exercises can help delay joint deterioration, reduce symptoms and improve strength, range of motion, balance and function to the ankle joint.</p>
            <h4>Orthotics & Braces</h4>
            <p>Following a gait analysis, custom orthotics may be suggested to help support your ankle, they can also redistribute the weight to ease pain to the affected region. A brace may help stabilise the joint and reduce pain.</p>
            <h4>Steroid injections</h4>
            <p>If pain persists in your ankle then your specialist may advise on a steroid injection.</p>
            <p>Typically the choice of substance for a steroid injection will be Cortisone. The steroid can decrease inflammation as it acts like a hormone, which is made naturally in your body and stops inflammation. Typically a lower dose of steroid is administered to provide relief from pain and stiffness, but a higher dose can be administered if you have a severe flare up of arthritis.</p>
            <p>We may also choose to inject Hyaluronic Acid or Platelet Rich Plasma to help healing.</p>
            <h4>Manipulation of the Joint Under Anaesthesia (MUA)</h4>
            <p>Manipulation of the joint is typically an outpatient procedure which can be performed under local anaesthesia. There are however some cases where your specialist may instead suggest IV sedation or general anesthesia in a hospital setting.</p>
            <p>MUA may be suggested if you have had a previous injury, this will help realign the joint and improve motion. You may be provided with an Aircast boot to mobilise and allow the ankle to heal in the correctly aligned position.</p>
            <h4>Surgical Management</h4>
            <p>If symptoms persist then surgery may be suggested. Please click below to find out more on common surgical options.</p>
        </>
    }
};

export const heelC = {
    "Plantar Fasciitis": {
        title: "Plantar Fasciitis",
        description: 
        <>
            <div className="t-image-border">
                <img className="title-image" src={require('../2d-images/Plantar-Fasciitis.jpg')} alt="Plantar Fasciitis anatomy diagram" />
            </div>
            <p>Our central London clinic is home to consultants who specialise in treating heel pain. There are many causes of heel pain and a range of diagnostic tools are used to evaluate the condition and recommend the most appropriate treatment plan.</p>
            <p>Plantar fasciitis is the most common cause of heel pain. This condition typically manifests as pain first thing in the morning when you get out of bed or from resting on a chair. The most common area of pain is on the inner side of the heel and can be described as sharp, burning and throbbing in nature. It typically gets better after the morning and returns towards the end of the day.</p>
            <h4>Causes of Heel Pain:</h4>
            <ul>
                <li>Nerve impingment</li>
                <li>Calcaneal Fracture</li>
                <li>High Arched Feet</li>
                <li>Tight Calves</li>
                <li>Plantar Fascia Tear</li>
                <li>Heel Bursitis</li>
                <li>Plantar Fasciitis</li>
                <li>Back Problems</li>
            </ul>
            <p>We use X-rays, Ultrasound and MRI scans as required to ensure that a correct diagnosis of the heel pain and underlying conditions is achieved before any treatment is initiated.</p>
            <h3>Heel Pain Treatment:</h3>
            <h4>Shockwave Therapy</h4>
            <p>This non-invasive technology allows for the fascia to heal by encouraging increased blood flow and healing factors from the body to be activated. It has a growing evidence base in treating plantar fasciitis.</p>
            <h4>Orthotics/Insoles</h4>
            <p>These can improve foot function, cushion the heels and reduce arch strain. They are effective for most patients suffering from heel pain.</p>
            <h4>Injections</h4>
            <p>In recurrent and very serious cases, we may recommend an injection of cortisone or plasma rich protein (PRP). These are effective in reducing heel pain and are performed accurately by using ultrasound guidance.</p>
            <h4>Physiotherapy</h4>
            <p>Physiotherapy is used in combination with all the above treatments to ensure maximal effectiveness and rehabilitation.</p>
            <h4>Surgery</h4>
            <p>Less than 1% of cases require surgery and it is reserved as a last resort.</p>
        </>
    }
};

export const achillesC = {
    "Achilles Tendinopathy": {
        title: "Achilles Tendinopathy",
        description: 
            <>
            <div className="t-image-border">
                <img className="title-image" src={require('../2d-images/Achilles-Tendinopathy.jpg')} alt="Achilles Tendinopathy anatomy diagram" />
            </div>
            <p>The Achilles tendon is a band of tissue that connects the gastrocnemius and soleus muscle (calf muscle) to the heel bone. Injuries are common due to the intense pressure it undergoes during activities. Symptoms that can arise from overuse are broadly known as achilles tendonitis.</p>
            <p>Symptoms may include:</p>
            <ul>
                <li>Pain and stiffness along the achilles tendon</li>
                <li>Pain at the back of the heel that worsens with activity</li>
                <li>Swelling</li>
                <li>Limited range of motion</li>
            </ul>
            <p>The first step would be to arrange an appointment with a podiatric specialist who can assess and advise on treatment. They may refer for an X-ray or MRI.</p>
            <p>Treatments may include:</p>
            <h3>Physiotherapy</h3>
            <p>Your specialist may provide you with stretching exercises that can decrease pain and allow you to return to normal activities.</p>
            <h3>Orthotics</h3>
            <p>Your specialist may advise on custom orthotics following a gait analysis. The orthotics can absorb shock to reduce the impact and pain to your heel. A heel raise can also reduce the stress to your achilles tendon as it shortens the distance it needs to stretch during activities.</p>
            <h3>Shockwave Therapy</h3>
            <p>Shockwave applies pressure around the affected area with sound waves that pass through the skin to vibrate tissue, which stimulates healing and pain relief. Shockwave therapy is typically carried out once a week for three weeks.</p>
            <h3>Sodium Hydrochloride and Platelet-Rich Plasma (PRP) injections</h3>
            <p>When your achilles tendon tries to heal itself, tiny blood vessels can grow from the tendon sheath to the achilles tendon in a region where they are not naturally present. This in turn brings new nerves that can lead to pain. Sodium Hydrochloride (high volume) injections can separate and break off vessels and nerves by gently pushing the tendon sheath away from the tendon. This process helps reset the ineffective healing process and can reduce pain. Following the injection your specialist will advise on an achilles tendon stretching programme for the next two weeks.</p>
            <p>Platelet-rich plasma (PRP) therapy uses your body’s own blood plasma with concentrated platelets. The platelets contain growth factors that repair and regenerate damaged tissue. By injecting your own platelets into the affected area the platelets will promote faster healing to the region.</p>
            </>
    }
};

export const soleC = {
    "Flat Foot": {
        title: "Flat Foot",
        description: 
        <>
            <div className="t-image-border">
                <img className="title-image" src={require('../2d-images/Flat-Foot.jpg')} alt="Flat Foot anatomy diagram" />
            </div>
            <p>Flat Foot is where the arch of your foot is collapsed, this is also known as a pes planus foot type. It is common in children as they may still be developing their arches. Flat foot can also be broadly characterised by flexible and rigid flat foot deformity. Not all flat feet are problematic or considered pathological.</p>
            <p>The arch can also drop when you are older due to weakening of tendons.</p>
            <p>Factors that may cause flat foot include:</p>
            <ul>
                <li>An injury to your foot and/or ankle</li>
                <li>Rheumatoid arthritis</li>
                <li>Genetics</li>
                <li>Hypermobility</li>
                <li>Obesity</li>
                <li>Failure of tendons that support the arch</li>
                <li>Tightness of calves</li>
            </ul>
            <p>Flat feet can have adverse effects on the body, the issue may cause pain in your feet, ankle, legs, back, knees and hip.</p>
            <p>It’s important to arrange an appointment with a specialist who can assess and provide you with a treatment plan.</p>
            <h3>Treatment may include:</h3>
            <h4>Physiotherapy and Stretching</h4>
            <p>Your specialist may advise on stretching exercises that can help correct the fallen arch and decrease pain.</p>
            <h4>Custom Orthotics</h4>
            <p>Following a gait analysis, your specialist may suggest custom orthotics that can support your arch. The gait analysis will also assess issues that may be causing pain to your musculoskeletal system, such as calf pain and back pain, the orthotics can for example include a heel raise that can reduce the strain to your calf which may be caused by your flat foot issue.</p>
            <p>In more severe cases of flat feet your specialist may instead advise on a brace.</p>
            <h4>Surgical Management</h4>
            <p>If symptoms persist then your specialist may advise on surgery. Please click here to find out more.</p>
        </>
    }
}