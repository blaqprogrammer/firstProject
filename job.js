// Set up the network nodes and sink
let nodes = [node1, node2, node3, ...];
let sink = Sink;

// Set the packet size and buffer size
let packetSize = 1024; // bytes
let bufferSize = 100; // packets

// Set the simulation start and end times
let startTime = 0;
let endTime = 10000; // milliseconds

// Initialize the packet counters
let packetsSent = 0;
let packetsReceived = 0;

// Start the simulation loop
for (let time = startTime; time < endTime; time++) {
  // Generate a data packet for each node in the network
  for (let i = 0; i < nodes.length; i++) {
    let packet = nodes[i].generatePacket(packetSize);
    packetsSent++;

    // Send the packet to the sink without filtering
    sink.receivePacket(packet);

    // Check the buffer size of the sink and drop packets if full
    if (sink.buffer.length > bufferSize) {
      sink.dropPacket();
    }
  }
}

// Calculate the packet delivery ratio
let deliveryRatio = packetsReceived / packetsSent;

// Output the result
console.log(`Packet delivery ratio: ${deliveryRatio}`);