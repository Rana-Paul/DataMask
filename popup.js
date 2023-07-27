import { ethers } from "./ethers.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("click", handler);
});

function handler() {
  document.getElementById("center").style.display = "flex";

  const private_key = document.getElementById("private_key").value;
  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;

  let ad = "0x0C9E4626b9242b4bC916c6Da2df185Ef84530abF";
  let p = "764ed139cfcaf9200f7dfba53e9d751a69fa2828854dbac3c1d1735737e6eef4";

  const provider = new ethers.providers.JsonRpcBatchProvider(
    "https://eth-sepolia.g.alchemy.com/v2/NRG7wONxhKV7Zxz6CcQfSZHkTLI0mZmw"
  );
  let wallet = new ethers.Wallet(private_key, provider);

  const tx = {
    to: address,
    value: ethers.utils.parseEther(amount),
  };

  var a = document.getElementById("link");

  wallet.sendTransaction(tx).then((txObj) => {
    console.log("txHash", txObj.hash);
    document.getElementById("center").style.display = "none";
    const a = document.getElementById("link");
    a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
    document.getElementById("link").style.display = "block";
  });
}

// Check Balance

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("check_balance")
    .addEventListener("click", checkBlance);
});

function checkBlance() {
  console.log("entrr");
  document.getElementById("center").style.display = "flex";
  const provider = new ethers.providers.JsonRpcBatchProvider(
    "https://eth-sepolia.g.alchemy.com/v2/NRG7wONxhKV7Zxz6CcQfSZHkTLI0mZmw"
  );

  const signer = provider.getSigner();
  console.log(signer);

  const address = document.getElementById("address").value;
  provider.getBalance(address).then((bal) => {
    const balETH = ethers.utils.formatEther(bal);
    document.getElementById(
      "check_balance"
    ).innerText = `Your Balance: ${balETH} ETH`;
    console.log(balETH);
    document.getElementById("center").style.display = "none";
  });
}
