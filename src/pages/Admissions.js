import React from 'react';
import AdmissionForm from './AdmissionForm';
import './Admission.css';

function Admissions() {
  return (
    <div className="admissions-container">
      <h1>Admission to Our University</h1>
      <AdmissionForm />
      <section>
        <h2>Available Courses</h2>
        <p>We offer a variety of undergraduate and postgraduate programs across multiple disciplines.</p>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor of Science (B.Sc.)</td>
              <td>3 Years</td>
              <td>High School Diploma</td>
            </tr>
            <tr>
              <td>Bachelor of Business Administration (BBA)</td>
              <td>4 Years</td>
              <td>High School Diploma</td>
            </tr>
            <tr>
              <td>Master of Business Administration (MBA)</td>
              <td>2 Years</td>
              <td>Bachelor's Degree</td>
            </tr>
            <tr>
              <td>Computer Science & Engineering (B.Tech)</td>
              <td>4 Years</td>
              <td>High School Diploma</td>
            </tr>
            <tr>
              <td>Master of Computer Applications (MCA)</td>
              <td>2 Years</td>
              <td>Bachelor's Degree</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Admission Process</h2>
        <ol>
          <li>Complete the online application form.</li>
          <li>Verify eligibility criteria for your chosen course.</li>
          <li>Submit all required documents.</li>
          <li>Pay the application processing fee.</li>
          <li>Attend an entrance test (if applicable).</li>
          <li>Schedule an interview (for select courses).</li>
          <li>Receive your admission confirmation letter.</li>
          <li>Complete the fee payment and enrollment process.</li>
        </ol>
      </section>
      <section>
        <h2>Fee Structure</h2>
        <table>
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>Undergraduate</th>
              <th>Postgraduate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tuition Fee (Per Year)</td>
              <td>$45,000</td>
              <td>$75,000</td>
            </tr>
            <tr>
              <td>Accommodation Fee</td>
              <td>$5,000</td>
              <td>$6,000</td>
            </tr>
            <tr>
              <td>Library Fee</td>
              <td>$200</td>
              <td>$250</td>
            </tr>
            <tr>
              <td>Other Fees</td>
              <td>$300</td>
              <td>$400</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Scholarships & Financial Aid</h2>
        <p>We offer a variety of scholarships and financial aid options for eligible students.</p>
        <ul>
          <li><strong>Merit-Based Scholarships:</strong> Awarded to students with exceptional academic performance.</li>
          <li><strong>Need-Based Scholarships:</strong> Available for students from economically weaker backgrounds.</li>
          <li><strong>Sports Scholarships:</strong> For students excelling in sports at national and international levels.</li>
          <li><strong>Government Grants:</strong> Eligible students can apply for state and federal education grants.</li>
        </ul>
        <p>For more information, visit our <a href="/scholarships">Scholarships Page</a>.</p>
      </section>
    </div>
  );
}

export default Admissions;
