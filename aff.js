function        big_img(win, x, y, color)
{
    var img;
    var a;

    a = 0;
    img = mlj_new_image(win, 36, 36);
    while (a < 4 * 36 * 36)
    {
        img.data[a] = 255;
        img.data[a + 1] = 255;
        img.data[a + 2] = 0;
        img.data[a + 3] = 255;
        a = a + 4;
    }
    mlj_put_image_to_window(win, img, x, y);
}


function        big_img2(win, x, y, color)
{
    var img;
    var a;

    a = 0;
    img = mlj_new_image(win, 36, 36);
    while (a < 4 * 36 * 36)
    {
        img.data[a] = 255;
        img.data[a + 1] = 255;
        img.data[a + 2] = 255;
        img.data[a + 3] = 255;
        a = a + 4;
    }
    mlj_put_image_to_window(win, img, x, y);
}

function        big_img3(win, x, y, color)
{
    var img;
    var a;

    a = 0;
    img = mlj_new_image(win, 36, 36);
    while (a < 4 * 36 * 36)
    {
        img.data[a] = 255;
        img.data[a + 1] = 102;
        img.data[a + 2] = 51;
        img.data[a + 3] = 255;
        a = a + 4;
    }
    mlj_put_image_to_window(win, img, x, y);
}

function        my_new_random(struc)
{
    struc.mrand = Math.floor((Math.random() * 19) + 1);
    struc.mrand2 = Math.floor((Math.random() * 19) + 1);
}

function        big_pixel(win, x, y, color)
{
    var x2;
    var y2;

    x2 = 0;
    y2 = 0;;
    while (y2 < 36)
    {
        x2 = 0;
        while (x2 < 36)
        {
            mlj_pixel_put(win, x + x2, y + y2, color);
            x2++;
        }
        y2++;
    }
}
