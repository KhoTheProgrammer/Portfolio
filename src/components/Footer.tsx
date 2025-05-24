const Footer = () => {
  return (
    <div className="lg:w-[300px] p-4 bg-[#040b14] lg:fixed lg:left-0 lg:bottom-0 lg:z-[9997] w-full fixed bottom-0 text-white" onClick={() => console.log("pressed")}>
      <p className="text-center" onClick={() => console.log("pressed")}>Copyright <strong>Kondwani Padyera</strong> 2025</p>
    </div>
  )
}

export default Footer
