function        my_map()
{
    var tab;

    tab = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
    return (tab);
}

function        snakemap(win, tab)
{
    var a;
    var b;
    var x;
    var y;

    a = 0;
    y = 40;
    while (a < tab.length)
    {
        x = 36;
        b = 0;
        while (b < tab[a].length)
        {
            if (tab[a][b] == 0)
                big_pixel(win, x, y, "blue");
            if (tab[a][b] == 1)
                big_pixel(win, x, y, "green");
            x = x + 36;
            b++;
        }
        y = y + 36;
        a++;
    }
}

function        my_image(win)
{
    var img;
    var a;

    a = 0;
    img = mlj_new_image(win, 800, 800);
    while (a < 4 * 800 * 800)
    {
        img.data[a] = 0;
        img.data[a + 1] = 0;
        img.data[a + 2] = 0;
        img.data[a + 3] = 255;
        a = a + 4;
    }
    mlj_put_image_to_window(win, img, 0, 0);
}

function        my_snake(win, tab, i, struc)
{
    var struc2;

    struc2 = {a : 0, b : 0, x : 0, y : 40};
    while (struc2.a < tab.length)
    {
        struc2.x = 36;
        struc2.b = 0;
        while (struc2.b < tab[struc2.a].length)
        {
            if (tab[struc2.a][struc2.b] == 2)
                big_pixel(win, struc2.x, struc2.y, "red");
            else if (tab[struc2.a][struc2.b] == 3)
                big_img(win, struc2.x, struc2.y, "yellow");
            else if (tab[struc2.a][struc2.b] == 4)
                tab = my_bonus_pixel(struc, struc2, tab);
            else if (tab[struc2.a][struc2.b] == 5)
                big_img3(win, struc2.x, struc2.y, "orange");
            else
                pixelbonus(struc, struc2, tab);
            struc2.x = struc2.x + 36;
            struc2.b++;
        }
        struc2.y = struc2.y + 36;
        struc2.a++;
    }
}
