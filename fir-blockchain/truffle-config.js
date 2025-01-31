module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,      // Ensure Ganache is running on this port
      network_id: "*", // Accept any network ID
      gas: 8000000,    // Increased gas limit
      gasPrice: 20000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20", // Ensure correct Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};