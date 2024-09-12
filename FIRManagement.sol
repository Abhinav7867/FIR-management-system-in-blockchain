// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FIRManagement {
    struct FIR {
        uint id;
        string description;
        address complainant;
        uint timestamp;
        string status;
    }

    mapping(uint => FIR) public firs;
    uint public firCount;

    event FIRFiled(uint id, address complainant);
    event FIRUpdated(uint id, string status);

    // Function to file a new FIR
    function fileFIR(string memory _description) public {
        firCount++;
        firs[firCount] = FIR(firCount, _description, msg.sender, block.timestamp, "Filed");
        emit FIRFiled(firCount, msg.sender);
    }

    // Function to update the status of an FIR (only by complainant)
    function updateFIR(uint _id, string memory _status) public {
        require(_id > 0 && _id <= firCount, "FIR does not exist");
        FIR storage fir = firs[_id];
        require(fir.complainant == msg.sender, "Only complainant can update FIR");
        fir.status = _status;
        emit FIRUpdated(_id, _status);
    }

    // Function to get the details of an FIR
    function getFIR(uint _id) public view returns (uint, string memory, address, uint, string memory) {
        FIR storage fir = firs[_id];
        return (fir.id, fir.description, fir.complainant, fir.timestamp, fir.status);
    }
}