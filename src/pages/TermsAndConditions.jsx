import React from "react";

const TermsAndConditions = () => {
    return (
        <section>
            {/* Image Section */}
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                <div className="mt-16">
                    <p className="text-center text-gray-500 text-4xl">Terms and Conditions</p>
                </div>
            </div>

            <div className="container mx-auto p-4">
                {/* Title Section */}
                <div className="mt-6 text-center">
                    <h1 className="text-3xl font-bold">
                        General Terms and Conditions of BCN LIP-LANGUAGE SCHOOL S.L.
                    </h1>
                    <p className="mt-4 text-sm text-gray-700">
                        Registered office: BCNLIP IDIOMAS, S.L.U. – Plaza del Duque de Medinaceli, 6, Local – 08002 Barcelona. NIF: B44974046. Phone number: +34 933186591, Fax +34 933014696, e-mail info@bcnlip.com, website www.bcnlip.com.
                    </p>
                </div>

                {/* Content Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">I.- ACADEMIC SCHOOL YEAR AND CLASS SCHEDULE</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Each course/educational program has an attendance schedule provided by the school. The school reserves the right to change the schedule, teachers, classrooms, locations or any other characteristic of the course or educational program according to its organizational needs.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Students can consult the schedule board on the school’s website (www.bcnlip.com) and on the screens at the entrance of each center. The boards display the number assigned to each group, in addition to the schedule and their respective center and classroom. General information about the school’s calendar can be found on the school’s website and in the student’s handbook; however, for more detailed information, please contact the school.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        During the holiday periods in August and December, the school may choose to either continue operations or close, based on its own decision. If the school is open, the availability of classes will be limited, focusing mainly on new groups that started in these months and special types of groups. Generally, students are expected to take their holidays during this time.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        If the school decides to offer special classes or activities, interested students must register in advance on a reservation list.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
