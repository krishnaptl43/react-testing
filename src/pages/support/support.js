import React from 'react'
const Support = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="course-details-tab style-2">
                    <nav>
                        <div className="nav nav-tabs justify-content-start tab-auto" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about" aria-selected="true">Contact Us</button>
                            <button className="nav-link" id="nav-privacy-tab" data-bs-toggle="tab" data-bs-target="#nav-privacy" type="button" role="tab" aria-controls="nav-privacy" aria-selected="false">Privacy Policy</button>
                            <button className="nav-link" id="nav-terms-tab" data-bs-toggle="tab" data-bs-target="#nav-terms" type="button" role="tab" aria-controls="nav-terms" aria-selected="false">Terms &amp; Conditions</button>
                            <button className="nav-link" id="nav-disclaimer-tab" data-bs-toggle="tab" data-bs-target="#nav-disclaimer" type="button" role="tab" aria-controls="nav-disclaimer" aria-selected="false">Disclaimer</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane active show" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                            <div className="card all-crs-wid h-auto mt-4">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-1 col-md-4 col-sm-6 p-4" />
                                        <div className="col-xl-2 col-md-4 col-sm-6 p-4">
                                            <div className="icon-bx-wraper left">
                                                <div className="icon-content">
                                                    <h5> Contact us:</h5>
                                                    <h6>
                                                        <a href="tel:9344906848" className="text-primary float"> Toll Free: 9344906848 </a>
                                                        <br />support@imagnus.in
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-4 col-sm-6 p-4">
                                            <div className="icon-bx-wraper left">
                                                <div className="icon-content">
                                                    <h5> For Technical Support: </h5>
                                                    <h6> <a href="https://api.whatsapp.com/send?phone=+917676331013" className="float" method="get">
                                                        <i className="fa fa-whatsapp my-float" /> +91 7676331013 </a>
                                                        <br />(Whatsapp Only)</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-md-4 col-sm-6">
                                            <img src="https://bharatcorporation.co.in/wp-content/uploads/2021/05/contact-header-mobile.png" style={{ width: '100%' }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="nav-disclaimer" role="tabpanel" aria-labelledby="nav-disclaimer-tab">
                            <div className="row mt-4">
                                <div className="col-xl-12 col-md-12">
                                    <div className="card all-crs-wid h-auto">
                                        <div className="card-body">
                                            <div className="row align-items-center p-4">
                                                <div className="col-lg-12 m-b30 wow" data-wow-duration="2s" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.4s', animationName: '' }}>
                                                    <div className="section-head style-1 mb-4">
                                                        <h4 className="sub-title m-b20 text-primary">Disclaimer </h4>
                                                    </div>
                                                    <h6 style={{ textAlign: 'justify' }}>The terms and conditions of your use of <strong>I-MAGNUS website/app</strong> are described below. These terms and conditions may be updated or changed without any notice to you. <br />
                                                        <br />The website, <strong> I-MAGNUS </strong>is developed, owned and operated by M/s MPAC CAREER PVT LTD having its registered office at 174, near bombay hospital, Indore, Madhya Pradesh 452010, India. The use and viewing of this site/app and the content therein is governed by the Terms of Use. When you use this site/app you acknowledge that you have read the Terms of Use and that you agree to be bound by the same, which may be modified from time to time.
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="nav-privacy" role="tabpanel" aria-labelledby="nav-privacy-tab">
                            <div className="row mt-4">
                                <div className="col-xl-12 col-md-12">
                                    <div className="card all-crs-wid h-auto">
                                        <div className="card-body">
                                            <div className="row align-items-center p-4">
                                                <div className="col-lg-12 m-b30 wow " data-wow-duration="2s" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.4s', animationName: '' }}>
                                                    <div className="section-head style-1 mb-4">
                                                        <h4 className="sub-title m-b20 text-primary">Privacy Policy </h4>
                                                    </div>
                                                    <p style={{ textAlign: 'justify' }}>
                                                        <strong>I-MAGNUS </strong>respects your privacy and recognizes the need to protect the personally identifiable information (any information by which you can be identified, such as name, address and telephone number) you share with us. We would like to assure you that we follow appropriate standards when it comes to protecting your privacy.
                                                    </p>
                                                    <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                        <strong>I-MAGNUS</strong>will not sell, trade or disclose to third parties any information derived from the registration for, or use of, any online service (including names and addresses) without the consent of the user or customer (except as required by subpoena, search warrant, or other legal process or in the case of imminent physical harm to the user or others).
                                                    </p>
                                                    <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                        <strong>I-MAGNUS</strong> will take appropriate steps to protect the information you share with us. We have implemented technology and security features and strict policy guidelines to safeguard the privacy of your personally identifiable information from unauthorized access and improper use or disclosure. I-MAGNUS will continue to enhance our security procedures as new technology becomes available. We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service. <br />
                                                        <br />We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website.
                                                    </p>
                                                    <h4 className="title">PAYMENT POLICY </h4>
                                                    <p style={{ textAlign: 'justify' }}>
                                                        <strong>I-MAGNUS </strong> has the sole discretion to provide the payment term. The payment must be first received by I-MAGNUS prior to its acceptance of an order. There is no credit given or agreed upon. The payment shall be made by credit card, debit card, cash on delivery or through wallet. I-MAGNUS has all the discretion to cancel or deny orders arising due to any errors. Any errors during payment should be sorted by the customer with the payment gateway service provider. I-MAGNUS shall not be responsible for any failed transactions.
                                                    </p>
                                                    <p style={{ textAlign: 'justify' }}>We use Razor pay for processing payments. We/Razor pay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. </p>
                                                    <p style={{ textAlign: 'justify' }}>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. </p>
                                                    <p style={{ textAlign: 'justify' }}>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. </p>
                                                    <p style={{ textAlign: 'justify' }}>For more insight, you may also want to read terms and conditions of razor pay on <a href="https://razorpay.com" target="_blank" rel="noreferrer">
                                                        <u>https://razorpay.com</u>
                                                    </a>
                                                    </p>
                                                    <h4 className="title">REFUND OR CANCELLATION POLICY</h4>
                                                    <p style={{ textAlign: 'justify' }}>Refund is not encouraged by I-MAGNUS but (for exceptional cases under special conditions partial refunds shall be granted based on the decision of the management) students have an option to cancel their orders (only future date orders). The decision of the management shall be final and binding. Once cancellation of order is received, and passed by management, we will send you an email to notify you through email about our decision(s). On approval of refund from management, your refund will be processed, and the amount will be saved in your Wallet, which can be redeemed in future orders. </p>
                                                    <p style={{ textAlign: 'justify' }}>Our refund policy lasts for one week. If one week have gone by since your purchase, no refund or exchange may be offered. </p>
                                                    <h4 className="title">PRICING POLICY </h4>
                                                    <p style={{ textAlign: 'justify' }}>The product price displayed for products on our website represents the full retail price listed on the product itself, suggested by the management in accordance with standard industry practice; or the estimated retail value for a comparably featured item offered elsewhere. We do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current or error-free. </p>
                                                    <h4 className="title">MODIFICATION POLICY </h4>
                                                    <p style={{ textAlign: 'justify' }}>The prices mentioned at the time of ordering will be the prices charged on the date of the delivery. Although prices of most of the products do not change but for some of the courses prices may change, In case the prices are higher or lower on the date of delivery no additional charges will be collected or refunded as the case may be at the time of the delivery of the order. </p>
                                                    <p style={{ textAlign: 'justify' }}>We may edit, delete or modify any of the terms and conditions contained in this agreement, at any time and in our sole discretion, by posting a notice or a new agreement on our site. </p>
                                                    <h4 className="title">GOVERNING LAW AND JURISDICTION</h4>
                                                    <p style={{ textAlign: 'justify' }}>This Agreement shall be governed by and construed in accordance with the substantive laws of Madhya Pradesh, without any reference to conflict-of-laws principles. Any dispute, controversy or difference, which may arise between the parties out of, in relation to or in connection with this Agreement, is hereby irrevocably submitted to the exclusive jurisdiction of the courts of Madhya Pradesh, to the exclusion of any other courts without giving effect to its conflict of law provisions, or your actual state or country of residence. </p>
                                                    <p style={{ textAlign: 'justify' }}>The entire agreement between the parties with respect to the subject matter hereof is embodied on this agreement and no other agreement relative hereto shall bind either party herein. </p>
                                                    <p style={{ textAlign: 'justify' }}>Your rights of whatever nature cannot be assigned nor transferred to anybody, and any such attempt may result in termination of this Agreement, without liability to us. However, we may assign this Agreement to any person at any time without notice. </p>
                                                    <p style={{ textAlign: 'justify' }}>In the event that any provision of these Terms and Conditions is found invalid or unenforceable pursuant to any judicial decree or decision, such provision shall be deemed to apply only to the maximum extent permitted by law, and the remainder of these Terms and Conditions shall remain valid and enforceable according to its terms. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="nav-terms" role="tabpanel" aria-labelledby="nav-terms-tab">
                            <div className="row mt-4">
                                <div className="col-xl-12 col-md-12">
                                    <div className="card all-crs-wid">
                                        <div className="card-body">
                                            <div className="courses-bx">
                                                <div className="row align-items-center p-4">
                                                    <div className="col-lg-12 m-b30 wow " data-wow-duration="2s" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.4s', animationName: '' }}>
                                                        <div className="section-head style-1 mb-4">
                                                            <h4 className="sub-title m-b20 text-primary">Terms and Conditions </h4>
                                                        </div>
                                                        <p style={{ textAlign: 'justify' }}>These terms and conditions, read with the privacy policy are an electronic record under the Information Technology Act, 2000, and the rules made there under and the amended provisions pertaining to electronic records under various Indian statutes and is enforceable against you under law by way of your acceptance hereof. This electronic record is generated by a computer system and does not require any physical or digital signatures.
                                                            <br /><br />This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of “I-Magnus” website/application.
                                                        </p>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}> The following terms and conditions (“Terms &amp; Conditions”) govern the entire use of our website https://www.imagnus.in (“Website”) and/or our application <strong>I-MAGNUS </strong>, collectively referred to as (“I-Magnus Platform or Platform): , including any use or viewing of any Content (defined below), services and products available at or through the Platform (collectively, “Services”), by Platform visitors and participants (collectively, “User”), both unregistered and registered (“Registered User”).
                                                            <br /><br />The Platform is owned and operated by MPAC CAREER PVT. LTD., with a business address: 174, near Bombay hospital, Indore, Madhya Pradesh 452010, India (“Company”). The Services are offered to each User subject to such User’s acceptance of all of these Terms &amp; Conditions and all other applicable terms and conditions, operating rules, policies and procedures that are communicated from time to time on or through the I-Magnus Platform. Please note that these Terms may change from time to time and the Company reserves the right to do the same without any prior notice to the User.
                                                            <br /><br />The use of this website and the products/services purchased on this website is subject to the following terms of use:
                                                        </p>
                                                        <h4>1. ELIGIBILITY</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            Company agrees to provide the Services to the User, subject to the following conditions:<br />
                                                            a.	User has the right, authority, and capacity to enter into these Terms;<br />
                                                            b.	User can form legally binding contracts under Indian Contract Act, 1872<br />
                                                            c.	User has not been suspended or removed from the company’s system for any reason whatsoever.<br />
                                                            d.	Registration information submitted by the User is truthful and accurate;<br />
                                                            e.	User is neither a competitor of the Company nor is using the Services for reasons that are in or that may promote competition with the Company;<br />
                                                            f.	User will be utilizing the Services under parental guidance if he/she is under 18 years of age; and<br />
                                                            g.	Use of the Services by User does not violate any applicable laws.<br /><br />
                                                            Additionally, Users are prohibited from selling, trading, or otherwise transferring their Account to another party.
                                                        </p>
                                                        <h4>2. USER ACCOUNT:</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>A. In order to access some of the features of the I-Magnus Platform, User may have to create account with I-Magnus Platform. User agrees and confirms that the User will never use another User’s account nor provide access to User’s own account to any third-party. When creating User account, User confirms that the information so provided is accurate and complete. Further, User agrees that User is solely responsible for the activities that occur by operating User account, and the User shall keep User’s account password secure and not share the same with anyone. User must notify I-Magnus Platform immediately, of any breach of security or unauthorized access/ use of User’s account. At no point in time will the I-Magnus Platform be liable for any losses caused by any unauthorized access/ use of User’s account; User shall solely be liable for the losses caused to I-Magnus or others due to such unauthorized access/ use, if any.
                                                            <br /><br />B. I-Magnus Platform takes no responsibility for any User Content that is uploaded on the I-Magnus Platform, and further, the User shall be solely responsible for his or her own actions in utilizing such User Content and availing the I-Magnus Platform as provided herein.
                                                            <br /><br />C. By registering though the User Account, User agrees to make his/her contact details available to Company’s employees, associates and partners so that the User may be contacted for education information and promotions, including any communication incidental thereto, through telephone, SMS, email etc. The Platform reserves all the information including user’s name, photograph and other details for the purpose stated in this clause.
                                                            <br /><br />D. User alone is solely responsible for maintaining the confidentiality of the account information and for all activities that occur under his/her account or using his account information. Further, the User agrees to (a) ensure that he/she successfully log out from his/her account at the end of each session; and (b) immediately notify the Company of any unauthorized access/ use of his/her account. If there is reason to believe that there is likely to be a breach of security or misuse of the User account, we may request the User to change the password or we may suspend his/her account without any liability on the Company, for such period of time as we may deem appropriate in those circumstances.
                                                            <br /><br />E. User acknowledges that his/her ability to use User account is dependent upon external factors such as internet service providers and internet network availability and the Company cannot guarantee accessibility to the Application at all times. In addition to the disclaimers set forth in the Terms, the Company shall not be liable to User for any damages arising out of User’s inability to log into his/her account and access the services of the Application at any time.
                                                        </p>
                                                        <h4>3. ACCESS, PERMISSIONS AND RESTRICTIONS</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>A. I-Magnus hereby grants User, the permission to access and use the I-Magnus Platform and Services as set forth in these Terms and Conditions, provided that:
                                                            <br />1. User’s use of the Platform as permitted is solely for his/her personal use.
                                                            <br />2. User agrees not to distribute in any medium any part of the I-Magnus Platform or the content without I-Magnus’s prior written authorization.
                                                            <br />3. User agrees not to alter or modify any part of the I-Magnus Platform.
                                                            <br />4. User agrees not to access content of any other User through any technology or means other than the video playback pages of the I-Magnus Platform itself.
                                                            <br />5. User agrees not to use the I-Magnus Platform for any of the following commercial uses unless User obtain I-Magnus’s prior written approval:
                                                            <br /><br />&gt;the sale of access to the I-Magnus Platform;
                                                            <br /><br />&gt;the sale of advertising, sponsorships, or promotions placed on or within the I-Magnus Platform or content; or
                                                            <br /><br />&gt;the sale of advertising, sponsorships, or promotions on any page or website that provide similar services as provided by I-Magnus Platform.
                                                            <br /><br />B. User agrees to receive installs and updates from time to time from the I-Magnus Platform. These updates are designed to improve, enhance and further develop the I-Magnus Platform and may take the form of bug fixes, enhanced functions, new software modules and completely new versions. User agrees to receive such updates (and permit I-Magnus to deliver these to User) as part of User’s use of the I-Magnus Platform.
                                                            <br /><br />C. User will not circumvent, disable, violate or attempt to violate, or otherwise interfere with the security or integrity of the Application, the proper operation of the Application, the features that prevent or restrict use or copying of any content or enforce limitations on use of the Application therein, or interfere with any activity being conducted on the Application;
                                                            <br /><br />D. User may post reviews, comments and other content; send other communications; and submit suggestions, ideas, comments, questions or other information as long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringement of intellectual property rights, or otherwise injurious to third parties or objectionable and does not consist of or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any other form of spam. Further, User give I-Magnus Platform limited, royalty free, worldwide, non-exclusive license to use the User Content and communication in developing I-Magnus Platform and in any of its marketing or promotional activities.
                                                            <br /><br />E. During User’s use of the I-Magnus Platform, the User will not violate any applicable laws or regulations for the time being in force within or outside India, any third-party rights, or I-Magnus’s policies.
                                                            <br /><br />F. User will not violate the terms including but not limited to any applicable Additional Terms of the Platform contained herein or elsewhere.
                                                            <br /><br />G. If User’s bandwidth usage exceeds the average bandwidth usage (as determined solely by I-Magnus) of other Users, I-Magnus reserves the right to immediately disable his/her account or throttle his/her usage until User can reduce his/her bandwidth consumption.
                                                            <br /><br />H. I-Magnus Platform reserves the right to discontinue any aspect of the I-Magnus Platform at any time with or without any prior notice, at its sole discretion.
                                                            <br /><br /> User agree that he/she is solely responsible to the Company and to any third party for any breach of obligations under the Terms and for the consequences (including any loss or damage which company or its affiliates or its vendors may suffer) for any such breach.
                                                            <br /><br />I.	Users shall not use the Service in order to transmit, post, distribute, store, modify or destroy material, including without limitation, content provided by the I-Magnus.
                                                            <br />a.	For any unlawful purpose or in violation of any applicable law, regulation, or international law; or
                                                            <br />b.	In a manner that will infringe the copyright, trademark, trade secret or any other corporeal and/ or intellectual property rights of the third parties, or violate the privacy, publicity or other personal rights of third parties; or
                                                            <br />c.	That violates any person’s right to Freedom of Speech; or
                                                            <br />d.	That is defamatory, libelous, obscene, threatening, abusive or is offensive to Users of the Platform, such as content or messages that promote racism, bigotry, hatred or physical harm of any kind against any group or individual; or
                                                            <br />e.	That is false or misleading; or
                                                            <br />f.	That harasses or advocates the harassment of another person.
                                                            <br /><br />Users are also prohibited from violating or attempting to violate the security of the Platform, including, without limitation, the following activities:
                                                            <br />a.	Accessing data not intended for such User or logging into a server or account which the User is not authorized to access;
                                                            <br />b.	Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization;
                                                            <br />c.	Attempting to interfere with the service to any User, host or network, including, without limitation, via means of submitting a virus to the Application, overloading, “flooding”, “spamming”, “mail bombing”, “hacking”, “crashing” or otherwise; or
                                                            <br />d.	Forging any TCP/IP packet header or any part of the header information in any e-mail or news group posting. Further, violations of system or network security may result in civil or criminal liability.
                                                            <br /><br />Specific Restrictions on Rights to Use: In addition to the above, the Users shall not:
                                                            <br />a.	Modify, adapt, translate, or reverse engineer any portion of the Website/Application;
                                                            <br />b.	Remove any copyright, trademark or other proprietary rights notices contained in or on the Platform and/or Services;
                                                            <br />c.	Use any robot, spider, site search/retrieval application, or other device to retrieve or index any portion of the Website/Application or for crawling the Website/Application, and scraping content or to circumvent the technological methods adopted by the Website/Application to prevent such prohibited use;
                                                            <br />d.	Reformat or frame any portion of the web pages that are part of the Website/Application;
                                                            <br />e.	Create Member accounts by automated means or under false or fraudulent pretenses;
                                                            <br />f.	Create or transmit unwanted electronic communications such as “spam” to other Users or members of the Website/Application or otherwise interfere with other User’s enjoyment of the Website/Application;
                                                            <br />g.	Submit any content or material that falsely express or imply that such content or material is sponsored or endorsed by I-Magnus;
                                                            <br />h.	Transmit any viruses, worms, defects, Trojan horses or other items of a destructive nature;
                                                            <br />i.	Use the Website/Application to violate the security of any computer network, crack passwords or security encryption codes, transfer or store illegal material including those that are deemed threatening or obscene; or
                                                            <br />j.	Take any action that imposes, or may impose, in Company’s sole discretion, an unreasonable or disproportionately large load on I-Magnus’s IT infrastructure.
                                                        </p>
                                                        <h4>4. CONTENT USE AND INTELLECTUAL PROPERTY RIGHTS</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            A. User’s use of our Website, Application and Services is solely for User’s personal and non-commercial use. Any use of the Application, Website, Services or products or their contents other than for personal purposes is strictly prohibited.
                                                            <br /><br />B. We expect User to confirm that the Services purchased by User will meet User’s needs. We do not make any guarantee to User that the User will obtain a particular result, professional qualification or employment opportunity from User’s purchase and completion or usage of any of the Services.
                                                            <br /><br />C. User acknowledges and understands that the Company provides no warranty or representation with respect to the authenticity of the information provided on the Platform and Users must do their own check.
                                                            <br /><br />D. All Intellectual Property Rights in the Course Materials, Online Courses and the Lecture recordings/ speeches made by trainers/Educators are, and remain, the intellectual property of MPAC Career Pvt. Ltd. or its licensors.
                                                            <br /><br />E. User are not authorized to:-
                                                            <br />(i) copy, modify, sub-license, sell, upload, broadcast, post, transmit, reproduce, re-publish, or distribute any of the Course Materials without prior written permission of the MPAC Pvt. Ltd.;
                                                            <br />(ii) record on video or audio tape, relay by videophone or other means the Online Course or Lectures
                                                            <br />(iii) use the Course Materials in the provision of any other course or training whether given by us or any third party trainer;
                                                            <br />(iv) remove any copyright, trademark registration, or other proprietary notices from the contents of the Application and / or and / or our Website and/or Services/products.
                                                            <br />(v) modify, adapt, merge, translate, disassemble, decompile, reverse engineer (save to the extent permitted by law) any software forming part of the Online Courses.
                                                            <br /><br />F. By submitting content on or through the Services (User’s “Material”), User grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Material in any and all media or distribution methods (now known or later developed) and to associate User’s Material with User, except as described below. User agrees that others may use User’s Material in the same way as any other content available through the Services. Other users of the Services may fork, tweak and repurpose User’s Material in accordance with these Terms.
                                                            <br /><br />G. User further agrees that content User submit on the I-Magnus Platform will not contain third party copyrighted material, or material that is subject to other third party proprietary rights, unless User have permission from the rightful owner of the material or User are otherwise legally entitled to post the material and to grant I-Magnus Platform all of the license rights granted herein.
                                                        </p>
                                                        <h4>5. FEES/PAYMENTS</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            A. The Fees for the Services shall be as set out on the Website.
                                                            <br /><br />B. Unless otherwise specified at the time, User purchase the Services, the Fees are exclusive of all taxes, and any delivery costs payable in respect of the delivery of Course Material to User. Each of these costs will be set out in the Website.
                                                            <br /><br />C. Save where specifically stated otherwise on the Website, all Fees shall be exclusive of any amounts payable to any professional body for registration and examination entry. These are payable by User directly to the relevant professional body or examination board and we accept no responsibility or liability for User’s failure to book User’s exam with the relevant professional body or examination.
                                                            <br /><br />D. Fees for the Service selected by User on the Website shall be debited from User’s Bank account through credit / debit card/ UPI/ Online Banking at the time of purchase. Fees must be paid in full prior to accessing any online course.
                                                            <br /><br />E. Any fees charged by User’s debit or credit card provider in connection with User’s purchase of Services are for User’s own account and I-Magnus Platform shall not be responsible for these.
                                                            <br /><br />F. Company is not liable to reimburse the amount in case of Unsuccessful payment transaction. The User has to contact concerned Bank or Intermediaries.
                                                            <br /><br />G. User shall be responsible for all costs incurred in connection with User’s access onto any Online Course.
                                                        </p>
                                                        <h4>6. REMEDIES WITH MPAC CAREER PVT. LTD. </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            User understands and agrees that the Company may review any content on the Website/Application, and in case the Company finds, in its sole discretion, that the User violates any of these Terms stated in ,the Company reserves the right to take actions in order to prevent/ control such violation, including without limitation, removing the offending communication or content from the Website/Application and/or terminating the membership of such violators and/or blocking their use of the Website/Application.
                                                            <br /><br />Company shall also be entitled to investigate occurrences which may involve such violations and may take appropriate legal action, involve and cooperate with law enforcement authorities in prosecuting Users who are involved in such violations.
                                                        </p>
                                                        <h4>7. LICENSE TO USE </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            Subject to the User’s compliance with these Terms, the Company grants the User a limited, non-exclusive, non-sub licensable, revocable, non-transferrable license to: <br />(i) access and use the Website/Applications on User’s personal device solely in connection with User’s use of the Services; and <br />(ii) access and use any content, information and related materials that may be made available through the Services, in each case solely for User’s personal, non-commercial use. Any rights not expressly granted herein are reserved by the Company.
                                                        </p>
                                                        <h4>8. TERMINATION OF ACCOUNT </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            A.These Terms shall remain in full force and effect unless and until User’s account is terminated as provided herein. User may terminate his/her account as per the instructions provided on the Website/Application, and end their use of the Services at any time.
                                                            <br /><br />B. MPAC Career Pvt. Ltd. may terminate User’s access to the I-Magnus Platform, if
                                                            <br />1.the User is a repetitive copyright infringer;
                                                            <br />2.the User breaches any terms of these Terms and Conditions.
                                                            <br />3.Violation of any applicable laws;
                                                            <br />4.User’s use of the I-Magnus Platform disrupts our business operations or affects any other party/ User; or
                                                            <br />5.User have behaved in a way, which objectively could be regarded as inappropriate or unlawful or illegal or which would bring any claims against the I-Magnus Platform.
                                                            <br /><br />C. I-Magnus Platform reserves the right to decide whether User Content violates these Terms and Conditions for reasons other than copyright infringement, such as, but not limited to, pornography, obscenity, or excessive length or any other parameter that I-Magnus Platform deems fit from time to time. I-Magnus Platform may at any time, without prior notice and in its sole discretion, remove such User Content and/or terminate a User's account for submitting such material in violation of these Terms and Conditions.
                                                            <br /><br />D. I-Magnus Platform may suspend access to the Website/Application or require the User to change User’s password, if it is reasonable to believe that the I-Magnus Platform have been or are likely to be misused, and we will notify User accordingly. Any termination of User’s registration and/or Account on the I-Magnus Platform will not affect liability previously incurred by User.
                                                            <br /><br />E. In case any of the above-mentioned cases occur, I-Magnus Platform reserves the right, in its sole discretion, to terminate or suspend the User’s account with immediate effect.
                                                            <br /><br />F. Company. has the right (at its sole discretion) for any reason to <br />(i) delete, disable or deactivate User’s account, block User’s email or IP address, or otherwise terminate User’s access to or use of the Website/Application, <br />(ii) remove and discard any code or content within any network anywhere on the Website/Application or <br />(iii) shut down a network, including permanent deletion of any network data, with or without notice, on the Website/Application and with no liability of any kind to User.
                                                            <br /><br />These Terms shall survive termination or expiration of the Application and any Services.
                                                            <br /> Additionally, Company also reserves the right to refuse to process requisitions from Users with a prior history of questionable charges including, without limitation, breach of any agreements by User with Company or breach of any policy.
                                                        </p>
                                                        <h4>9. LIABILITY </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            A. Although I-Magnus Platform aims to provide the Services to the highest standards of the industry, neither it, nor its educators accept any liability for
                                                            <br />1.any inaccuracy or misleading information provided in the Online Course or Course Materials and any reliance by User on any such information,
                                                            <br />2.any loss or corruption of data,
                                                            <br />3.any loss of profit, revenue or goodwill, or
                                                            <br />4.any indirect, special or consequential loss arising out of any breach of the terms of this Agreement.
                                                            <br /><br />B. I-Magnus Platform provides User with access to compiled educational information and related sources. Such information is provided on an As Is basis and I-Magnus Platform assumes no liability for the accuracy or completeness or use or non-obsolescence of such information.
                                                            <br /><br />C. The Company's products and / or Services, including the Application and content, are compatible only with certain devices/tablets/instruments/hardware. The Company shall not be obligated to provide workable products and / or services for any instruments that are not recognized by the Company or those instruments that may be purchased from any third party which are not compatible with the Company's products and Services. The company reserves the right to upgrade the table/ type of compatible devices as required from time to time.
                                                            <br /><br />D. Certain contents in the I-Magnus Platform may contain opinions and views. The Company shall not be responsible for such opinions or any claims resulting from them. Further, the Company makes no warranties or representations whatsoever regarding the quality, content, completeness, or adequacy of such information and data.
                                                            <br /><br />E. Subject to the Terms and Conditions, Company’s total liability arising out of or in connection with these terms and conditions and in relation to anything done or not done in connection with these terms and conditions and the delivery of the Service (and whether the liability arises because of breach of contract, negligence or for any other reason) shall be limited to the Fees received by us in connection with the relevant Online Course in relation to which the dispute has arisen.
                                                            <br /><br />F. No claim may be brought after the last date on which the Services concerned have finished or ceased to be provided by us.
                                                        </p>
                                                        <h4>10. COMMUNICATIONS</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            User consents to receive communications via electronic medium from MPAC Career Pvt. Ltd. periodically as and when required. User agrees and acknowledges that all communication between MPAC Career Pvt. Ltd. and the User in such format shall satisfy all legal requirements pertaining to such exchange.
                                                        </p>
                                                        <h4>11. CONFIDENTIALITY</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            As a result of the provision of the I-Magnus Platform services to User, and whether due to any intentional or negligent act or omission, we may disclose to User or they may otherwise learn of or discover, our non-public documents, business practices, object code, source code, management styles, day-to-day business operations, capabilities, systems, current and future strategies, marketing information, financial information, software, technologies, processes, procedures, methods and applications, or other aspects of our business (“Confidential Information”).
                                                            <br /><br />User hereby agree and acknowledge that such information is confidential and shall be our sole and exclusive intellectual property and proprietary information. User agrees to use our Confidential Information only for the specific purposes as allowed in these Terms. Any disclosure of our Confidential Information to a third party specifically including a direct competitor is strictly prohibited and will be vigorously challenged in the court of law. All obligations contained herein shall survive the termination of these Terms. Furthermore, User acknowledges that our information is proprietary, confidential and extremely valuable to us, and that we would be materially damaged by any disclosure of our Confidential Information. User acknowledges and agrees that monetary damages provide an insufficient remedy for the breach of this confidentiality obligation, and that we shall be entitled to injunctive relief.
                                                        </p>
                                                        <h4>12. INDEMNIFICATION</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            User agrees to defend, indemnify and hold harmless the Company, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising out of or in connection with:
                                                            <br />1.use of and access of the Application/Website/Services;
                                                            <br />2.violation of any term of these Terms or any other policy of the Company;
                                                            <br />3.violation of any third party right, including without limitation, any copyright, property, or privacy right; or
                                                            <br />4.any claim that User’s use of the Application/Website/Services has caused damage to a third party. This defense and indemnification obligation will survive these Terms.
                                                        </p>
                                                        <h4>13. COPYRIGHT COMPLAINT</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            Users shall not use the Application for any purpose or in any manner that infringes the rights of the Company and any third party. Company has a policy of terminating the accounts of Users who (in MPAC Career Pvt. Ltd.’s reasonable discretion) repeatedly indulge in infringing such copyrights.
                                                            If a User believes, in good faith, that any material on the Website/Application infringes his/her copyrights, notifications of claimed copyright infringement should be sent to the Company’s designated person as set forth below.
                                                            <br /><br />Name: [*]
                                                            <br />Mailing Address: [*]
                                                            <br />Phone Number: [*]
                                                            <br />Email address: [*]
                                                            <br /><br />The notification sent to the Company claiming copyright infringement should include whenever possible:
                                                            <br />a.	An electronic or physical signature of the owner or the person authorized to act on behalf of the owner of the copyright interest;
                                                            <br />b.	A description of the copyrighted work that the User claims has been infringed;
                                                            <br />c.	A description of where the alleged infringing material is located on the Website/Application;
                                                            <br />d.	A statement by the User that he/she believes in good faith that the disputed use is not authorized by the copyright owner, its agent or the law; and
                                                            <br />e.	A statement by User, made under penalty of perjury, that the above information in his/her notice is accurate and that he/she is the copyright owner or duly authorized to act on the copyright owner's behalf.
                                                            <br /><br />It is often difficult to determine if any User’s intellectual property rights have been violated. In that regard, the Company may request additional information before the Company removes any infringing material. If a dispute develops as to the correct owner of the rights in question, the Company reserves the right to remove such content along with that of the alleged infringer pending resolution of the matter.
                                                        </p>
                                                        <h4>14. GOVERNING LAW AND JURISDICTION</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            These terms shall be governed and interpreted by and construed in accordance with the laws of India, without giving effect to the principles of conflict of laws there under. The parties hereby agree that the courts situated in Indore, Madhya Pradesh, India shall have the sole jurisdiction over any or all disputes arising out of or in connection with this Agreement.
                                                        </p>
                                                        <h4>15. WARRANT DISCLAIMER</h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            THE SERVICES ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, WARRANTIES OF TITLE, ACCURACY, OMISSIONS, COMPLETENESS OR DELAYS, OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.TO THE FULLEST EXTENT PERMITTED BY LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (WHETHER TORT, CONTRACT, OR OTHERWISE), MPAC CAREER PVT. LTD., ITS AFFILIATES AND EACH OF THEIR RESPECTIVE OFFICERS, DIRECTORS, PARTNERS, EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE PLATFORM AND USER’S USE OF THE SERVICES THEREOF, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN ADDITION, NEITHER MPAC CAREER PVT. LTD. NOR ITS AFFILIATES, NOR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, PARTNERS, EMPLOYEES, AND AGENTS, MAKES ANY WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE PLATFORM’S CONTENT, OR THE SERVICES, OR THE CONTENT OF ANY SITES LINKED TO THE PLATFORM, AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM USER’S ACCESS TO AND USE OF THE PLATFORM; (III) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE PLATFORM; (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE PLATFORM BY ANY THIRD PARTY; AND/ OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY AND SERVICES OFFERED ON THE COMPANY’S PLATFORM, CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE PLATFORM. MPAC CAREER PVT. LTD. DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED THROUGH THE PLATFORM OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING. THE PLATFORM ARE CONTROLLED AND OFFERED BY MPAC CAREER PVT. LTD. FROM ITS FACILITIES SITUATED AT INDORE, MADHYA PRADESH, INDIA. MPAC CAREER PVT. LTD. MAKES NO REPRESENTATIONS THAT THE PLATFORM IS APPROPRIATE OR AVAILABLE FOR USE IN OTHER LOCATIONS. THOSE WHO ACCESS OR USE THE PLATFORM FROM OTHER JURISDICTIONS DO SO AT THEIR OWN VOLITION AND ARE RESPONSIBLE FOR COMPLIANCE WITH LOCAL LAWS.
                                                        </p>
                                                        <h4>16. INTERNET DELAYS AND FORCE MAJEURE </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            Company’s Services may be subject to limitations, delays, and other problems inherent in the use of the internet and electronic communications. Access to the Platform may be interrupted due to routine maintenance and for the introduction of new features. Company shall not be responsible for any delays, delivery failures, and interruptions due to routine maintenance and for the introduction of any new features, or other damage resulting from such problems. The Company shall not be in default for failing to perform any obligation hereunder if such failure is caused solely by supervening conditions beyond its respective control, including without limitation acts of God, civil commotion, riots, crowd disorder, strikes, lock-outs, other industrial actions, actual or threatened terrorist activities, war, fire, technical or power failure, failure of third party networking equipment, failure of the public Internet, interruptions, disruptions or malfunctions, explosions, storm, flood, earthquake, subsidence, epidemic or other natural or physical disaster, labour disputes or governmental demands or restrictions.
                                                        </p>
                                                        <h4>17. MISCELENNEOUS </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            A. Above Terms and Conditions shall bind all parties and constitute the entire agreement of the parties and prevail in any and all prior and existing contracts between the User and the Company.
                                                            <br /><br />B. If individual terms of the Terms &amp; Conditions become partially or wholly invalid or unenforceable, the validity of the remaining provisions shall not be affected.
                                                            <br /><br />C. The Company’s failure to enforce any right or provisions of the present Terms &amp; Conditions will not constitute a waiver of such or any other provision.
                                                            <br /><br />D. Users may not assign any of their rights under the present Terms &amp; Conditions to any third party. Whereas Company reserves the right to assign its rights to any other individual or entity at its sole discretion without any notice to the User.
                                                            <br /><br />E. I-Magnus Platform reserves the right, at its own discretion to modify or replace any part of these Terms. It is the Users’ responsibility to check the Terms &amp; Conditions periodically for changes. The Users’ continued use of or access to the Platform following the posting of any changes to the Terms &amp; Conditions constitutes acceptance of those changes. I-Magnus Platform may also, in the future offer new services and/or features through the Platform. Such new features and/or services shall be subject to the Terms &amp; Conditions.
                                                        </p>
                                                        <h4>18. GRIEVANCE OFFICER </h4>
                                                        <p className="m-b30" style={{ textAlign: 'justify' }}>
                                                            In accordance with Information Technology Act, 2000 and Rules made there under, the name and contact details of the Grievance Officer are provided below:
                                                            <br /><br />Name: [*]
                                                            <br />Mailing Address: [*]
                                                            <br />Phone Number: [*]
                                                            <br />Email address: [*]
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support;