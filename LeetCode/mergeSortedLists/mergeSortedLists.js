//approach: check each head.value to see if its greater than or equal to each other
//if equal to, add both to the first linkedlist
//if less than, add it to the linkedList in place of the greater one

// const mergeSortedLists = (headOne, headTwo) => {
//     let pointer1 = headOne
//     let pointer2 = headTwo
//     let current

//     if (headOne.value === headTwo.value) {
//         pointer1 = headOne.next //we're holding the rest of the list here
//         headOne.next = headTwo
//     }
// }

// ^^ coming back to this one!

function mergeSortedLists(head1, head2) {
    let p1a = head1
    let p1b = head1.next
    let p2 = head2
    //insert between
    if (p1a.v <= p2.v && p1b.v >= p2.v) {
        p1a.next = p2
        p2 = p2.next
        p1a = p1a.next
        p1a.next = p1b

        //insert before
    } else if (p1a.v > p2.v) {
        p1b = p1a
        p1a = p2
        p2 = p2.next
        p1a.next = p1b
    } else if (p2.v > p1b.v) {
        while (p2.v > p1b.v && p1b.next !== null) {
            p1b = p1b.next
            p1a = p1a.next
        }
        p1b.next = p2
    }
}