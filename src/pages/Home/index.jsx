import React, { useEffect, useState } from "react";
import "./style.scss";

const Home = () => {

  const [dataCourse, setDataCourse] = useState([])
  const [dataCourse2, setDataCourse2] = useState([])

  const fetchData =async()=>{
     const response= await fetch('https://api.alquran.cloud/v1/surah')
     const data = await response.json()
     console.log(data)
     setDataCourse(data?.data)
  }

     const fetchData2 =async()=>{
     const response= await fetch('https://api-course.arkademi.com/api/v1/course/revamp-categories/populer')
     const data = await response.json()
     console.log(data)
    setDataCourse2(data?.data)
     }

  useEffect(()=>{
    fetchData()
    fetchData2()
  },[])

console.log(dataCourse2)
  return (
    <>  
     <h1>Daftar Surat Al-Qur'an</h1>
     <h2> Daftar Nama Surat Al-Qur'an</h2>
<br></br><br></br>
<table class="coba">
  <thead>
    <tr>
        <th>ID Surat</th>
        <th>Nama Surat</th>
        <th>Jenis Surat</th>
        <th>Jumlah Ayat</th>
    </tr>
  </thead>
  <tbody id="coba">
    {dataCourse && dataCourse.slice(0, 3).map((item)=>{
      return(
        <tr>
        <td>{item.number}</td>
        <td>{item.englishName}</td>
        <td>{item.revelationType}</td>
        <td>{item.numberOfAyahs}</td>
      </tr>
      )
    })}
   
  </tbody>
</table>
<h1>API Course Reguler Arkademi</h1>
     <h2> Daftar Kelas</h2>
<br></br>
<table class="coba2">
  <thead>
    <tr>
        <th>Course ID</th>
        <th>Course Name</th>
        <th>Slug</th>
    </tr>
  </thead>
  <tbody id="coba2" >
    {dataCourse2 && dataCourse2.map((item)=>{
      return(
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.slug_name}</td>
      </tr>
      )
    })}
   
  </tbody>
</table>

    </>
  );
};

export default Home;
