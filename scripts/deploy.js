const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Knuckles", "Sonic", "Tails"],
      ["https://static.wikia.nocookie.net/sonic/images/0/0a/TSR_Knuckles.png", // Images
      "https://static.wikia.nocookie.net/villains/images/2/20/Sonic-0.png", 
      "https://static.wikia.nocookie.net/sonic/images/a/aa/TSR_Tails.png"],
      [300, 100, 75],                    
      [100, 300, 25],
      "Dr. Robotnik",
      "https://cdn.vox-cdn.com/thumbor/yoYBFa01eE7qLmLX1z13nZ6jEO4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19722878/sth_ff_027r2.jpg",
      10000,
      50                          
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
};
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();