/* 
2. ​PSBB ( Pembatasan Sosial Berskala Besar ) (60 Poin) (NDL011)

Galih and Ratna married during the COVID 19 period and only invited the families of both partners. 
they rented a number of minibuses to pick up all of their families to go to the wedding. 
But during COVID 19, the government held a PSBB program to reduce the impact of the spread of the virus. 
Each mini bus can only carry at most 4 passengers.
What a minimum number of buses will they need to rent if all members of each family should ride in the same Busses. 
(one bus can't take more than two family)

Input: 
  The first line contains integer ​n​ — the number of families.
  The second line contains a sequence of integers. The integers are separated by a space, 
    each integer is the number of members in the ​family.

Output: 
  Print the single number — the minimum number of buses necessary to drive all family to the Wedding.
  Print “​Input must be equal with count of family” if input number of family is not equal with count of family.

INPUT OUTPUT
  Input the number of families : 5
  Input the number of members in the family (​separated by a space) ​: 1 2 4 3 3
  Minimum bus required is : 4
  
  Input the number of families : 8
  Input the number of members in the family (​separated by a space) : ​2 3 4 4 2 1 3 1
  Minimum bus required is : 5
  
  Input the number of families : 5
  Input the number of members in the family (​separated by a space) : ​1 5
 */

const minimumBusRequired = (fams: number, members: number[]) => {
  // validating amount of fams and members
  if (members.length < fams) {
    const message = 'Input must be equal with count of family';
    return message;
  }

  // validating each members equal 4 per bus
  const max = 4;
  let validationMessage: { error: boolean; output: null | string | number[] } =
    {
      error: false,
      output: null,
    };

  members.map((member, index) => {
    if (member > 4) {
      const output = `Bus ${index + 1} need to reduce ${
        member - max
      } passenger(s). Max is ${max} passengers.`;

      validationMessage = { error: true, output };
      return;
    }
  });

  if (validationMessage.error) return validationMessage.output;

  const passengers = members.reduce((a, b) => a + b, 0);
  const busNeeded = Math.ceil(passengers / max);

  return `Minimum bus required is : ${busNeeded}`;
};

const secondTestOutput = minimumBusRequired(5, [1, 2, 4, 3, 3]);

console.log(secondTestOutput);
