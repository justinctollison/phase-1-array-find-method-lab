function superbowlWin(record)
{
    function winningYear(element, index, record)
    {
        if(element.result === "W")
        {
            return element.result
        }
    }
    const obj = record.find(winningYear)
    return obj.year
}