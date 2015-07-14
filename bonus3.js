function        pixelbonus(struc, struc2, tab)
{
    if (tab[struc2.a][struc2.b] == 6)
        big_pixel(struc.win, struc2.x, struc2.y, "green");
    else if (tab[struc2.a][struc2.b] == 7)
        big_img2(struc.win, struc2.x, struc2.y, "yellow");
    else if (tab[struc2.a][struc2.b] == 8)
        big_pixel(struc.win, struc2.x, struc2.y, "black");
    else if (tab[struc2.a][struc2.b] == 9)
        big_pixel(struc.win, struc2.x, struc2.y, "orange");
}

function        my_loose(params)
{
    params.cpt = params.cpt / 2;
    params.cpt2 = 0;
    confirm("game over");
    clearInterval(params.i);
    params.a = 9;
    params.b = 9;
    params.speed = 200;
    my_image(params.win);
    params.tab = my_map();
    my_snake(params.win, params.tab, params.i, params);
    snakemap(params.win, params.tab);
    return;
}
