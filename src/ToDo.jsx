export default function ToDo({children}){
    return (
        <>
          <div className="container mx-auto flex flex-wrap items-center justify-center">
            <p className=" m-4">{children}</p>
            <button className="btn btn-outline btn-error">Delete</button>
          </div>
        </>
      )
}