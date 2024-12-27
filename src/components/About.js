// import React, {useState} from 'react'

export default function About() {
    
  return (
    <div className="container my-3 " data-bs-theme="dark">
        <h1 className="mb-3">About</h1>
        <div class="accordion" id="accordionExample" >
  <div class="accordion-item" >
    <h2 class="accordion-header" >
      <button class="accordion-button" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        This is just a test project.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div class="accordion-body" >
        This is just a simple React Project created by me to learn React.
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}
