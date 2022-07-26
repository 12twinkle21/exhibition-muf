const Spinner = ({isLoading}) => {
  return (
    <>
    <div className={(isLoading ? 'loader--m-active ' : ' ') + "loader"}/>
      <div className={(isLoading ? 'loaderBg--m-active ' : ' ') + "loaderBg"}></div>
    </>
  )

}

export default Spinner;