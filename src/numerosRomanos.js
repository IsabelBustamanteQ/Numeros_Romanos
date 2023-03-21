function numerosRomanos(num)
{
    var numRomano="";
    while(num>=1)
    {
        if(num>=40)
        {
            numRomano=numRomano+"XL";
            num=num-40;
        }
        else
        {
            if(num>=10)
            {
                numRomano=numRomano+"X";
                num=num-10;
            }
            else
            {
                if(num>=9)
                {
                    numRomano=numRomano+"IX";
                    num=num-9;
                }
                else
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
            }
        }
        
    }
    return numRomano;
}
export default numerosRomanos;