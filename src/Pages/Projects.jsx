
const Projects = () => {
  const handleClick = () => {
    window.location.href="https://mysvelteportfolio.vercel.app/"
  }
  return (
    <div className="flex  text-center justify-center info-box mt-52">
      <button type="button"  onClick={handleClick}>Click here to visit my Portfolio.</button>
    </div>
  )
}

export default Projects