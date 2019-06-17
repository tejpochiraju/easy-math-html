package com.akshara.mathapp.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.TextView;

import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.CustomSpinnerAdapter;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.view.FontEditText;
import com.akshara.mathapp.view.FontTextView;

import butterknife.Bind;
import butterknife.OnClick;

public class LanguageSelectionActivity extends BaseActivity implements
        AdapterView.OnItemSelectedListener {

    @Bind(R.id.done_button)
    ImageButton doneImageButton;

    @Bind(R.id.org_edittext)
    FontEditText organizationEditText;

    @Bind(R.id.option_text)
    FontTextView optionTextView;

    @Bind(R.id.org_header)
    FontTextView orgHeaderTextView;

    @Bind(R.id.language_edit_spinner)
    Spinner languageEditSpinner;

    private int selectedLanguagePosition = 0;
    private String selectedLanguageValue = AppConstants.LANGUAGE_VALUE_ENGLISH;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setupLanguageSpinner();
        setViews();
        enableHomeButton();
    }

    private void setViews() {
        String orgNameHeader = getString(R.string.textview_organization_name);
        String orgHint = getString(R.string.hint_organization_name);
        String optionText = getString(R.string.textview_optional);

        orgHeaderTextView.setText(orgNameHeader);
        organizationEditText.setHint(orgHint);
        optionTextView.setText(optionText);

        organizationEditText.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView textView, int actionId, KeyEvent keyEvent) {
                if (actionId == EditorInfo.IME_ACTION_NEXT) {
                    hideKeyboard();
                    textView.clearFocus();
                    languageEditSpinner.requestFocus();
                    languageEditSpinner.performClick();
                }
                return true;
            }
        });
    }

    private void hideKeyboard() {
        InputMethodManager inputManager = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        if (inputManager == null)
            return;
        inputManager.hideSoftInputFromWindow(this.getCurrentFocus().getWindowToken(),
                InputMethodManager.HIDE_NOT_ALWAYS);
    }

    private void setupLanguageSpinner() {
        CustomSpinnerAdapter languageAdapter = new CustomSpinnerAdapter(this, R.array.language_type_array);

        languageEditSpinner.setAdapter(languageAdapter);
        languageEditSpinner.setOnItemSelectedListener(this);
        languageAdapter.notifyDataSetChanged();
        languageEditSpinner.setSelection(selectedLanguagePosition);

        languageEditSpinner.setFocusable(true);
    }

    @OnClick(R.id.done_button)
    public void onDoneButtonClicked(ImageButton imageButton) {
        if (selectedLanguagePosition == 0) {
            MsgUtils.displayToast(this, R.string.message_error_select_language);
        } else {
            String orgName = organizationEditText.getText().toString().trim();
            Intent intent = new Intent(this, GenderAvatarSelectionActivity.class);
            intent.putExtra(AppConstants.SELECTED_LANGUAGE, DataParserUtil.getLanguageValueFromPosition(selectedLanguagePosition));
            intent.putExtra(AppConstants.ORG_NAME_EXTRA, orgName);
            startActivity(intent);
        }
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_language_selection;
    }

    @Override
    protected String getLanguageValue() {
        return selectedLanguageValue;
    }

    @Override
    public void onBackPressed() {
        finish();
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        selectedLanguagePosition = i;
        if (i == 0) {
            doneImageButton.setSelected(false);
            return;
        }
        if (!doneImageButton.isSelected())
            doneImageButton.setSelected(true);
        selectedLanguageValue = DataParserUtil.getLanguageValueFromPosition(i);
        setLanguage();
        setViews();
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }
}
