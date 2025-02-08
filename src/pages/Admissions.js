import React from 'react';
import AdmissionForm from './AdmissionForm';
 // Assuming the form is in a separate file
import './Admission.css';

function Admissions() {
  return (
    <div>
      <h1>Admission to Our University</h1>
      <AdmissionForm />
      <section>
        <h2>Admission Process</h2>
        <ol>
          <li>Complete the online application.</li>
          <li>Check eligibility.</li>
          <li>Submit necessary documents.</li>
          <li>Attend an interview if required.</li>
        </ol>
      </section>
      <section>
        <h2>Fee Structure</h2>
        <table>
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tuition Fee</td>
              <td>$15,000</td>
            </tr>
            <tr>
              <td>Accommodation Fee</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>Library Fee</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Other Fees</td>
              <td>$300</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Scholarships & Financial Aid</h2>
        <p>We offer a variety of scholarships and financial aid options for eligible students.</p>
      </section>
    </div>
  );
}

export default Admissions;
