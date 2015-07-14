function        my_bonus(struc)
{
    if (struc.tab[struc.a][struc.b] == 6)
        my_bonus1(struc);
    if (struc.tab[struc.a][struc.b] == 7)
        my_bonus2(struc);
    if (struc.tab[struc.a][struc.b] == 8)
        my_bonus3(struc);
    if (struc.tab[struc.a][struc.b] == 9)
        my_bonus4(struc);
}

function        my_bonus1(struc)
{
    confirm("It was a WALL!! :)");
    clearInterval(struc.i);
    struc.a = 9;
    struc.b = 9;
    my_image(struc.win);
    struc.tab = my_map();
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
    struc.mrand3 = Math.floor((Math.random() * 4) + 1);
    struc.cpt = struc.cpt / 2;
}

function        my_bonus2(struc)
{
    alert("Speed increase");
    clearInterval(struc.i);
    struc.a = 9;
    struc.b = 9;
    struc.speed = struc.speed / 4;
    my_image(struc.win);
    struc.tab = my_map();
    if (struc.cpt >= 150)
        my_timer_bonus(struc);
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
    struc.mrand3 = Math.floor((Math.random() * 4) + 1);
}

function        my_bonus3(struc)
{
    alert("clear! :)");
    clearInterval(struc.i);
    struc.tab = my_map();
    struc.tab[9][9] = 0;
    struc.tab[struc.a][struc.b] = 2;
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
    struc.mrand3 = Math.floor((Math.random() * 4) + 1);
}

function        my_bonus4(struc)
{
    alert("Your snake is your very best friend!");
    clearInterval(struc.i);
    my_snake_win(struc);
    my_snake(struc.win, struc.tab, struc.i, struc);
    snakemap(struc.win, struc.tab);
    struc.mrand3 = Math.floor((Math.random() * 4) + 1);
    struc.cpt2 = 0;
}
