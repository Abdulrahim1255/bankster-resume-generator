import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { renderToString } from "react-dom/server";
import Button from "@mui/material/Button";
// import pdfe from "../assets/pdf.pdf";
import logo from "../assets/banksterfull.png";
import Uploadcv from "./Uploadcv";
import { jsPDF } from "jspdf";
import './pdf.css'
import styled from 'styled-components';
import Test from "./Test";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import autoTable from 'jspdf-autotable'
import './pdfdownload.css'
const Input = styled('input')({
  display: 'none',
});


const PdfDownloadd = ({ message }) => {



  useEffect(() => {
    var arrBody = []
    message.map((item) => {
      var datar = item.firstName + "," + item.lastName
      var arrBodyInn = []
      arrBodyInn.push(datar)
      arrBody.push(arrBodyInn)
     
    })

    console.log(arrBody + "", "tt")
  }, [0])

  return (
    <></>
  )
}


const PdfDownload = ({ message }) => {
  const [updateStatus, setUpdateStatus] = React.useState(null)


  const [item, setItem] = useState([]);
  console.log(message, "lllll");

  var element = [];

  const getBase64 = async (e) => {
    var file = e.target.files[0];
    console.log(file)
    setUpdateStatus(file.name)
    const buffer = await file.arrayBuffer();
    let byteArray = new Int8Array(buffer);

    setItem(byteArray);
  };



  const Prints = () => (
    <div >





      <table id='#my-table' className="mytbale">
        <tr>
          <th> SrNo</th>
          <th>Key</th>
          <th>Value</th>
        </tr>
        {/* {
      message.map((item,i)=>{
        console.log(message,"asdf")
        console.log(item,"item")
       return(
        
            <tr key={i}>
          <td >{i+1}</td>
          <td >{item.firstName}</td>
          <td >{item.lastName}</td>
          </tr>
        
       )
        })
      } */}

      </table>




      {/* <table className="ui celled table" >
  <thead>
    <tr><th>Name</th>
    <th>Age</th>
    <th>Job</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table> */}

    </div>
  );

  async function createPdf() {
    console.log(item.buffer);
    const pdf = new jsPDF()

    pdf.addImage(logo, "PNG", 10, 5, 40, 20);
    pdf.setFontSize(13);
    pdf.setFont("helvetica", "bold");

    pdf.text("Banksterindia - A leading job site for BFSI Industry ", 40, 32);

    const string = renderToString(<Prints />);
    // pdf.html(string,12, 53);\
    console.log(message, 'fgf')

    var arrBody = []
    var arrBodyOut = []

    var arrBodyOut0 = []

    var arrBodyOut1 = []
    var arrBodyOut2 = []
    var arrBodyOut3 = []
    var arrBodyOut4 = []
    var arrBodyOut5 = []
    var arrBodyOut6 = []
    var arrBodyOut7 = []
    var arrBodyOut8 = []
    var arrBodyOut9 = []
    var arrBodyOut10 = []
    var arrBodyOut11 = []
    var arrBodyOut12 = []
    var arrBodyOut13 = []
    var arrBodyOut14 = []
    var arrBodyOut15 = []
    var arrBodyOut16 = []
    var arrBodyOut17 = []
    var arrBodyOut18 = []
    var arrBodyOut19 = []
    var arrBodyOut20 = []
    var arrBodyOut21 = []
    var arrBodyOut22 = []

    arrBodyOut0.push("Position Applying For & Location")
    arrBodyOut0.push(message[0].positionApplyingLocation)
    arrBody.push(arrBodyOut0)

    arrBodyOut1.push("Day Of Sourcing")
    arrBodyOut1.push(message[0].dayOfSourcing)
    arrBody.push(arrBodyOut1)
    //age

    arrBodyOut2.push("Name of the Candidate")
    arrBodyOut2.push(message[0].nameoftheCandidate)
    arrBody.push(arrBodyOut2)
    //age //age
    arrBodyOut3.push("Contact Number")
    arrBodyOut3.push(message[0].contactNumber)
    arrBody.push(arrBodyOut3)
    //age //age
    arrBodyOut4.push("Email Id")
    arrBodyOut4.push(message[0].emailId)
    arrBody.push(arrBodyOut4)
    //age //age
    arrBodyOut5.push("age")
    arrBodyOut5.push(message[0].age)
    arrBody.push(arrBodyOut5)
    //age //age
    arrBodyOut6.push("Highest Qualification")
    arrBodyOut6.push(message[0].highestQualification)
    arrBody.push(arrBodyOut6)
    //age //age
    arrBodyOut7.push("Current Location")
    arrBodyOut7.push(message[0].currentLocation)
    arrBody.push(arrBodyOut7)
    //age //age
    arrBodyOut8.push("Current Company")
    arrBodyOut8.push(message[0].currentCompany)
    arrBody.push(arrBodyOut8)
    //age //age
    arrBodyOut9.push("Current Designation")
    arrBodyOut9.push(message[0].currentDesignation)
    arrBody.push(arrBodyOut9)
    //age //age
    arrBodyOut10.push("Current Product")
    arrBodyOut10.push(message[0].currentProduct)
    arrBody.push(arrBodyOut10)
    //age //age
    arrBodyOut11.push("Avg Ticket Size")
    arrBodyOut11.push(message[0].avgTicketSize)
    arrBody.push(arrBodyOut11)
    //age //age
    arrBodyOut12.push("ROI")
    arrBodyOut12.push(message[0].roi)
    arrBody.push(arrBodyOut12)
    //age //age
    arrBodyOut13.push("Average Buisness / Portfolio")
    arrBodyOut13.push(message[0].averageBuisness)
    arrBody.push(arrBodyOut13)
    //age //age
    arrBodyOut14.push("No Of Team Members")
    arrBodyOut14.push(message[0].naoOfTeamMembers)
    arrBody.push(arrBodyOut14)
    //age //age
    arrBodyOut15.push("No. of DSA")
    arrBodyOut15.push(message[0].noofDSA)
    arrBody.push(arrBodyOut15)
    //age //age
    arrBodyOut16.push("Total Years of Exp")
    arrBodyOut16.push(message[0].totalYearsofExp)
    arrBody.push(arrBodyOut16)
    //age //age
    arrBodyOut17.push("Relevant Years of Exp")
    arrBodyOut17.push(message[0].relevantYearsofExp)
    arrBody.push(arrBodyOut17)
    //age //age
    arrBodyOut18.push("Current CTC")
    arrBodyOut18.push(message[0].currentCTC)
    arrBody.push(arrBodyOut18)
    //age //age
    arrBodyOut19.push("Expected CTC ")
    arrBodyOut19.push(message[0].expectedCTC)
    arrBody.push(arrBodyOut19)
    //age //age
    arrBodyOut20.push("Notice Period")
    arrBodyOut20.push(message[0].noticePeriod)
    arrBody.push(arrBodyOut20)
    //age //age
    arrBodyOut21.push("Reason For Change")
    arrBodyOut21.push(message[0].reasonforChange)
    arrBody.push(arrBodyOut21)
    //age //age
    arrBodyOut22.push("Remarks ")
    arrBodyOut22.push(message[0].remarks)
    arrBody.push(arrBodyOut22)

    if(message.length>0 && message[0].firstName.length>0 && message[0].lastName.length>0){
      message.map((item, index) => {
        var datar = item.firstName + "," + item.lastName
        var arrBodyInn = []
  
        arrBodyInn.push(item.firstName)
        arrBodyInn.push(item.lastName)
        arrBody.push(arrBodyInn)
  
      })
    }


    console.log([arrBody], "abc");
    autoTable(pdf, {


   
      theme: 'grid',
      // tableLineColor: ['black'],
      // tableLineWidth: 0.50,
      headStyles:{fillColor:'#f5297a'},
      // bodyStyles: {lineColor: 'black',lineWidth:0.50},
      margin: { top: 40 },

      head: [["Particulars", "Description"]],
      body: arrBody
    }

    )
    
    
    pdf.setTextColor('black');
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "bold");
    pdf.text("Address: Unit No -3, H 272. Bharat Tower, ", 136, 270);
    pdf.text("   Palam Vihar, Near Krishna Chowk, Gurugram -122017", 134, 275);

    pdf.text("   banksterindia@gmail.com ", 134, 280);

    pdf.text("Contact: 91 70117 24492 ", 136, 285);
    pdf.text("http://www.banksterindia.com", 90, 290);






    const firstDonorPdfBytes = pdf.output("arraybuffer")
    const secondDonorPdfBytes = item.buffer;

    const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes);
    const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes);

    const pdfDoc = await PDFDocument.create();

    const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])

    pdfDoc.addPage(firstDonorPage)


    console.log(secondDonorPdfDoc.getPages(), "pages")

    for (let index = 0; index < secondDonorPdfDoc.getPages().length; index++) {
      // const element = array[index];
      const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc, [index])
      pdfDoc.addPage(secondDonorPage)

    }





    const pdfBytes = await pdfDoc.save();

    require("downloadjs")(pdfBytes, `bankster_${message[0].nameoftheCandidate}`, "application/pdf");

  }

  return (
    <div>
      <div>
        <div className="mt-4 mb-2" style={{ textAlign: "center" }}>
          {
            updateStatus && <p style={{ textAlign: "center" }}><b>{updateStatus}</b></p>
          }
          <label htmlFor="contained-button-file">
            <Input
              type="file"
              name="imgUpload"
              accept=".pdf"
              onChange={getBase64}
              id="contained-button-file"
            />
            <Button color="secondary" variant="outlined" component="span" endIcon={<CameraAltIcon />}>
              Upload Resume PDF
            </Button>
          </label>
        </div>
        <Button sx={{
          m: '2rem',
          width: '30ch',
        }} onClick={()=>{
          console.log(message)
          if(message.length>0){
            createPdf()
          }
        }} variant="contained" color="secondary">
          Download
        </Button>
        {/* <input
        style={{
          border: '2px solid rgb(156,39,176)',
           padding:'5px',
           background:'rgb(156,39,176)'
        }}  
          type="file"
          
          name="imgUpload"
          accept=".pdf"
          onChange={getBase64}
        /> */}
      </div>









    </div>
  );
};

export default PdfDownload;

