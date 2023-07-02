#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_PACKETS 10

struct packet {
    int id;
    char data[100];
};

int main() {
    struct packet packets[MAX_PACKETS];
    int num_packets = 0;
    int i;

    // Generate some sample packets
    for (i = 0; i < MAX_PACKETS; i++) {
        packets[i].id = i;
        sprintf(packets[i].data, "Packet %d", i);
    }
    
    // Send packets directly to the sink
    for (i = 0; i < MAX_PACKETS; i++) {
        printf("Sending packet %d to the sink...\n", packets[i].id);
        // Code to send packet to the sink goes here
    }
    
    printf("All packets sent to the sink!\n");

    return 0;
}