package com.akshara.mathapp.utils.itemdecorators;

import android.content.Context;
import android.graphics.Rect;
import android.support.v7.widget.RecyclerView;
import android.view.View;

import com.akshara.mathapp.R;

public class GridVerticalItemDecorator extends RecyclerView.ItemDecoration {
    private int space;

    public GridVerticalItemDecorator(Context context) {
        this.space = context.getResources().getDimensionPixelSize(R.dimen.grid_vert_decorator_spacing);
    }

    @Override
    public void getItemOffsets(Rect outRect, View view,
                               RecyclerView parent, RecyclerView.State state) {
        outRect.top = space;
    }
}
