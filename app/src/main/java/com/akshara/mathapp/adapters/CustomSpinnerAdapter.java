package com.akshara.mathapp.adapters;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import com.akshara.mathapp.R;
import com.akshara.mathapp.view.FontTextView;

/**
 * Created by Rajeef on 22/2/18
 */

public class CustomSpinnerAdapter extends BaseAdapter {
    private String[] itemList;

    public CustomSpinnerAdapter(@NonNull Context context, int arrayId) {
        itemList = context.getResources().getStringArray(arrayId);
    }

    @Override
    public int getCount() {
        return itemList.length;
    }

    @Override
    public String getItem(int i) {
        return itemList[i];
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        return getCustomView(position, convertView, parent, false);
    }

    @Override
    public View getDropDownView(int position, View convertView, ViewGroup parent) {
        return getCustomView(position, convertView, parent, true);
    }

    private View getCustomView(int position, View convertView, ViewGroup parent, boolean isBorderVisible) {
        if (convertView == null)
            convertView = LayoutInflater.from(parent.getContext()).inflate(R.layout.layout_custom_spinner_item, parent, false);
        FontTextView fontTextView = convertView.findViewById(R.id.text);
        fontTextView.setText(itemList[position]);
        if (position == 0 || !isBorderVisible) {
            convertView.findViewById(R.id.border_imageview).setVisibility(View.GONE);
        } else {
            convertView.findViewById(R.id.border_imageview).setVisibility(View.VISIBLE);
        }
        return convertView;
    }
}
