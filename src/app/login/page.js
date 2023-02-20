/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Login() {

  return (
   <>
   <div className="container-fluid">
    <div className="row">
      <div className="col-4 mt-5">
        <div className="card">
          <div className="p-2">
            <img alt="..." src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=400&q=80" className="card-img" />
          </div>
          
          <div className="card-body">
            <h3 className="h4">Some blog title here</h3>
            
            <span className="d-block text-muted text-sm font-semibold">Monday Jan 20 , 2021</span>
            <p className="mt-4 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea...
            </p>
            <a href="#" className="btn btn-sm btn-primary">
              Learn more
            </a>
          </div>
        </div>

      </div>

    </div>
   </div>
   </>
  )
}
