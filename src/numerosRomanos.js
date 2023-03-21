function numerosRomanos(num)
{
    var numRomano="";
    while(num>=1)
    {
        numRomano=numRomano+"I";
        num=num-1;
    }
    return numRomano;
}
export default numerosRomanos;