function        my_snake_win(struc)
{
    var a;
    var b;
    var x;
    var y;

    a = 0;
    y = 40;
    while (a < struc.tab.length)
    {
        x = 36;
        b = 0;
        while (b < struc.tab[a].length)
        {
            if (struc.tab[a][b] == 3)
                struc.tab[a][b] = 5;
            x = x + 36;
            b++;
        }
        y = y + 36;
        a++;
    }
}

function        my_win(struc)
{
    clearInterval(struc.i);
    alert("GG, You won!");
    struc.cpt = 0;
    struc.cp2 = 0;
    struc.speed = 200;
    struc.a = 9;
    struc.b = 9;
    my_image(struc.win);
    struc.tab = my_map();
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
}

function        my_bonus_appear(struc)
{
    if (struc.tab[struc.mrand][struc.mrand2] == 0)
    {
        struc.tab[struc.mrand][struc.mrand2] = 4;
        my_new_random(struc);
        struc.cpt2 = 0;
    }
    else if (struc.tab[struc.mrand][struc.mrand2] == 1)
    {
        my_new_random(struc);
        my_bonus_appear(struc);
    }
    else if (struc.tab[struc.mrand][struc.mrand2] == 2)
    {
        my_new_random(struc);
        my_bonus_appear(struc);
    }
    else if (struc.tab[struc.mrand][struc.mrand2] == 3)
    {
        my_new_random(struc);
        my_bonus_appear(struc);
    }
}

function        my_timer_bonus(struc)
{
    alert("GG, vous avez tenu plus de 200 coups. ;)");
    struc.cpt = 0;
    clearInterval(struc.i);
    struc.tab[0][7] = 5;
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
}

function        my_bonus_pixel(struc, struc2, tab)
{
    if (struc.mrand3 == 2)
        tab[struc2.a][struc2.b] = 6;
    else if (struc.mrand3 == 1)
        tab[struc2.a][struc2.b] = 7;
    else if (struc.mrand3 == 3)
        tab[struc2.a][struc2.b] = 8;
    else if (struc.mrand3 == 4)
        tab[struc2.a][struc2.b] = 9;
    return (tab);
}
