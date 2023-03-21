function numerosRomanos(num)
{
    var numRomano="";
    while(num>=1)
    {
        if(num>=5)
        {
            numRomano=numRomano+"V";
            num=num-5;
        }
        
        else
        {
            if(num>=4)
            {
                numRomano=numRomano+"IV";
                num=num-4;
            }
            else
            {
                numRomano=numRomano+"I";
                num=num-1;
            }
        }
    }
    return numRomano;
}
export default numerosRomanos;