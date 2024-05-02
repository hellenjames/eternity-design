function Payment() {
    
  document.addEventListener("DOMContentLoaded", (event) => {
    paypal.HostedButtons({
      hostedButtonId: "Q88H5QZJB52VY"
    })
    .render("#paypal-container-Q88H5QZJB52VY")
  })
  return(
    <div id="paypal-container-Q88H5QZJB52VY"><button>paypal</button></div>
  )
}

export default Payment;
