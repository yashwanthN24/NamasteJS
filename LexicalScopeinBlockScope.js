const a = 20; 

{
    const a = 10; 
    {
        const a = 200; 
        console.log(a); // add breakpoint at this line and check Scope section in source in inspect 
    }
}


// Scope rules for Arrow Functions is same as Normal Functions  