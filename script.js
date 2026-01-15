// Initialize Pi SDK
Pi.init({ version: "2.0" });

// Login with Pi
function loginWithPi() {
  Pi.authenticate(
    ["username"],
    function (auth) {
      alert("Karibu " + auth.user.username);
      console.log(auth);
    },
    function (error) {
      console.error(error);
      alert("Imeshindikana kuingia");
    }
  );
}

// Pay with Pi (Sandbox)
function payWithPi() {
  const paymentData = {
    amount: 1,
    memo: "Msaada wa Mwambapa Crypto Swahili",
    metadata: { purpose: "donation" }
  };

  Pi.createPayment(paymentData, {
    onReadyForServerApproval: function (paymentId) {
      console.log("Payment ID:", paymentId);
    },
    onReadyForServerCompletion: function (paymentId, txid) {
      alert("Asante kwa kuchangia 🙏");
      console.log(paymentId, txid);
    },
    onCancel: function (paymentId) {
      alert("Malipo yameghairiwa");
    },
    onError: function (error, payment) {
      console.error(error, payment);
      alert("Kuna tatizo kwenye malipo");
    }
  });
}