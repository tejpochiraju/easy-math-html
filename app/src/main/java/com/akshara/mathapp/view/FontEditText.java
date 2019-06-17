package com.akshara.mathapp.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Paint;
import android.support.v7.widget.AppCompatEditText;
import android.util.AttributeSet;

import com.akshara.mathapp.R;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.TypeFaceProvider;

/**
 * Created by Rajeef on 17/2/18
 */

public class FontEditText extends AppCompatEditText {
    public FontEditText(Context context) {
        super(context);
    }

    public FontEditText(Context context, AttributeSet attrs) {
        super(context, attrs);
        if (!isInEditMode()) init(attrs);
    }

    private void init(AttributeSet attrs) {
        TypedArray attrsArray = getContext().obtainStyledAttributes(attrs, R.styleable.apptext);

        try {
            int style = attrsArray.getInteger(R.styleable.apptext_textStyle, 3);

            String fontFamily;
            switch (style) {
                case 0:
                    fontFamily = AppConstants.FONT_FAMILY_LIGHT;
                    break;
                case 1:
                    fontFamily = AppConstants.FONT_FAMILY_BOLD;
                    break;
                case 2:
                    fontFamily = AppConstants.FONT_FAMILY_BLACK;
                    break;
                default:
                    fontFamily = AppConstants.FONT_FAMILY_BOLD;
                    break;
            }

            String fontName = getContext().getString(R.string.font_name) + "-" + fontFamily;
            setTypeface(TypeFaceProvider.getTypeFace(getContext(), fontName));
            setPaintFlags(getPaintFlags() | Paint.SUBPIXEL_TEXT_FLAG);
        } finally {
            attrsArray.recycle();
        }
    }

    @Override
    public void setText(CharSequence text, BufferType type) {
        if (text != null) {
            super.setText(text, type);

        }
    }

    @Override
    public boolean performClick() {
        return super.performClick();
    }

}
